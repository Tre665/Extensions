[{"Owner":"JCPalmer","Date":"2014-06-27T23:12:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co_ decided that something talked about at the end of another thread was best addressed in its own thread.  As intro (gryff correct as needed) Blender allows for meshes to deformed without the use of bones.  This could used for animation.  Not having a skeleton seems easier to do than bones in Blender to me_co_ and the results can be way beyond them as well.  Copied link from prior thread_dd_ \n_lt_/p_gt__lt_div class_eq__qt_ipsEmbeddedVideo_qt_ contenteditable_eq__qt_false_qt__gt__lt_div_gt__lt_iframe width_eq__qt_480_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/-RgM47uqN1I?feature_eq_oembed_qt_ frameborder_eq__qt_0_qt_ allowfullscreen_eq__qt_true_qt__gt__lt_/iframe_gt__lt_/div_gt__lt_/div_gt_._lt_p_gt_ _lt_/p_gt__lt_p_gt_Question is_dd_  Is there even any hope that this could be exportable from Blender to BabylonJS?  Gryff also provided a .blend_co_ copied link _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/70260871/webgl/jcp/cloth1a.zip_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_Cloth Animation2_lt_/a_gt_ .Load it up in blender_co_ and hit the play button_co_ _t_&gt_sm__t__co_ in the bottom middle of the window._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I have done is run this blend through a Babylon export script with extra stuff added to find &amp_sm_ for now write extra lines into the log file which describes the data for shape keys.  FYI_co_ the Blender doc I got my info from is at _lt_a href_eq__qt_http_dd_//www.blender.org/documentation/blender_python_api_2_70_release/bpy.types.Key.html#bpy.types.Key_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blender.org/documentation/blender_python_api_2_70_release/bpy.types.Key.html#bpy.types.Key_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It seems that shape keys can be shared across meshes_co_ so I added this code to reference them this way in the main loop &amp_sm_ a ShapeKey class because it seems the data structure is recursive_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_# Shape Keys from the main loopfor key in bpy.data.shape_keys_dd_    ShapeKey(key_co_ 1))  ...class ShapeKey_dd_    def __init__(self_co_ key_co_ level)_dd_        TowerOfBabel.log(_t_processing begun of shape _dd_  _t_ + key.name_co_ level)        if hasattr(key_co_ _t_eval_time_t_   )_dd_ TowerOfBabel.log(_t_eval time_dd_  _t_    + str(key.eval_time)_co_ level + 1)        if hasattr(key_co_ _t_slurph_t_      )_dd_ TowerOfBabel.log(_t_slurph_dd_  _t_       + str(key.slurph   )_co_ level + 1)        if hasattr(key_co_ _t_use_relative_t_)_dd_ TowerOfBabel.log(_t_use relative_dd_  _t_ + format_bool(key.use_relative)_co_ level + 1)        if hasattr(key_co_ _t_animation_data_t_)_dd_            TowerOfBabel.log(_t_animation_data_dd__t__co_ level + 1)            for fcurve in key.animation_data.action.fcurves_dd_                TowerOfBabel.log(_t_fcurve.data_path_dd__t_ + fcurve.data_path_co_ level + 2)                    # recursion_co_ oh crap        if hasattr(key_co_ _t_key_blocks_t_)_dd_            for block in key.key_blocks_dd_                ShapeKey(block_co_ level + 1)_lt_/pre_gt__lt_p_gt_This produced this output (probably a dead end from this angle)_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_processing begun of shape _dd_  Key\teval time_dd_  0.0\tslurph_dd_  0\tuse relative_dd_  true\tanimation_data_dd_\t\tfcurve.data_path_dd_key_blocks[_qt_Draped_qt_].value\tprocessing begun of shape _dd_  Basis\tprocessing begun of shape _dd_  Draped_lt_/pre_gt__lt_p_gt_In the processing of a mesh I added the following code if shape keys were associated_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_# shape keys for mesh if object.data.shape_keys_dd_    TowerOfBabel.log(_t_Shape Key found in mesh_dd_  _t_ + object.data.shape_keys.name_co_ 2)    keyBlocks _eq_ object.data.shape_keys.key_blocks    for block in keyBlocks_dd_        TowerOfBabel.log(_t_Block Name_dd_  _t_ + block.name + _t__co_ num vertices_dd__t_ + str(len(block.data))_co_ 3)        for data in block.data_dd_            vertex _eq_ data.co            TowerOfBabel.log(_t_x_dd_ _t_ + str(vertex.x) + _t__co_ y_dd_ _t_+ str(vertex.y) + _t__co_ z_dd_ _t_ + str(vertex.z)_co_ 4)_lt_/pre_gt__lt_p_gt_This produced a lot of output_co_  here is a shortened version of the log for the mesh with the shape key_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_processing begun of mesh_dd_  Cloth_co_ using base class_dd_ BABYLON.Mesh\tWARNING_dd_  No materials have been assigned_dd_ \tnum positions      _dd_  1156\tnum normals        _dd_  1156\tnum uvs            _dd_  0\tnum uvs2           _dd_  0\tnum colors         _dd_  0\tnum indices        _dd_  6534\tShape Key found in mesh_dd_  Key\t\tBlock Name_dd_  Basis_co_ num vertices_dd_1156\t\t\tx_dd_ 1.0_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -1.0_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 1.0_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -1.0_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.8181818127632141_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.6363636255264282_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.45454543828964233_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.27272725105285645_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.09090906381607056_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.09090910851955414_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.27272728085517883_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.4545454680919647_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.6363636255264282_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.8181818127632141_co_ y_dd_ -1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.8181818127632141_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.6363636255264282_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.45454543828964233_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.27272725105285645_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ 0.09090906381607056_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.09090910851955414_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.27272728085517883_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.4545454680919647_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.6363636255264282_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -0.8181818127632141_co_ y_dd_ 1.0_co_ z_dd_ 0.0\t\t\tx_dd_ -1.0_co_ y_dd_ 0.8181818127632141_co_ z_dd_ 0.0\t\t\t. . .\t\t\tx_dd_ 0.8787878751754761_co_ y_dd_ 0.7575757503509521_co_ z_dd_ 0.0\t\t\tx_dd_ 0.939393937587738_co_ y_dd_ 0.6969696879386902_co_ z_dd_ 0.0\t\t\tx_dd_ 0.939393937587738_co_ y_dd_ 0.7575757503509521_co_ z_dd_ 0.0\t\tBlock Name_dd_  Draped_co_ num vertices_dd_1156\t\t\tx_dd_ 0.42931264638900757_co_ y_dd_ -0.532781720161438_co_ z_dd_ -0.8952973484992981\t\t\tx_dd_ -0.4533596634864807_co_ y_dd_ -0.5035873055458069_co_ z_dd_ -0.9059669375419617\t\t\tx_dd_ 0.5022068023681641_co_ y_dd_ 0.5161137580871582_co_ z_dd_ -0.9113012552261353\t\t\tx_dd_ -0.5195051431655884_co_ y_dd_ 0.592650294303894_co_ z_dd_ -0.846235990524292\t\t\tx_dd_ 0.315280556678772_co_ y_dd_ -0.4323137700557709_co_ z_dd_ -0.8073179721832275\t\t\tx_dd_ 0.23072978854179382_co_ y_dd_ -0.5339680314064026_co_ z_dd_ -0.7025083899497986\t\t\tx_dd_ 0.12728682160377502_co_ y_dd_ -0.45900893211364746_co_ z_dd_ -0.6225178241729736\t\t\tx_dd_ 0.2509845793247223_co_ y_dd_ -0.36435461044311523_co_ z_dd_ -0.6379876732826233\t\t\tx_dd_ 0.09559790790081024_co_ y_dd_ -0.3883511424064636_co_ z_dd_ -0.6364848017692566\t\t\tx_dd_ -0.08387131989002228_co_ y_dd_ -0.38822996616363525_co_ z_dd_ -0.6374479532241821\t\t\tx_dd_ -0.24025821685791016_co_ y_dd_ -0.39399784803390503_co_ z_dd_ -0.637752115726471\t\t\tx_dd_ -0.25066906213760376_co_ y_dd_ -0.34393423795700073_co_ z_dd_ -0.22135230898857117\t\t\tx_dd_ -0.2696780264377594_co_ y_dd_ -0.3371814489364624_co_ z_dd_ 0.011421998962759972\t\t\tx_dd_ 0.43590784072875977_co_ y_dd_ 0.1628814935684204_co_ z_dd_ -0.566344141960144\t\t\tx_dd_ 0.45525118708610535_co_ y_dd_ 0.22023046016693115_co_ z_dd_ -0.5630139708518982\t\t\tx_dd_ 0.3902812600135803_co_ y_dd_ 0.21390795707702637_co_ z_dd_ -0.5098786950111389\t\t\tx_dd_ 0.4428275227546692_co_ y_dd_ 0.1841123402118683_co_ z_dd_ -0.5045356154441833\t\t\tx_dd_ 0.3944912552833557_co_ y_dd_ 0.2104395627975464_co_ z_dd_ -0.5703118443489075\t\t\tx_dd_ 0.4410724639892578_co_ y_dd_ 0.17216885089874268_co_ z_dd_ -0.5640472173690796\t\t\tx_dd_ 0.5403734445571899_co_ y_dd_ 0.24221545457839966_co_ z_dd_ -0.5275962352752686\t\t\tx_dd_ 0.5631066560745239_co_ y_dd_ 0.2916404604911804_co_ z_dd_ -0.5530022382736206\t\t\tx_dd_ 0.548436164855957_co_ y_dd_ 0.2113366574048996_co_ z_dd_ -0.5791581273078918\t\t\t. . .\t\t\tx_dd_ 0.5152558088302612_co_ y_dd_ 0.40521472692489624_co_ z_dd_ -0.6688541769981384\t\t\tx_dd_ 0.5745273232460022_co_ y_dd_ 0.3480875492095947_co_ z_dd_ -0.6703621745109558\t\t\tx_dd_ 0.5555965900421143_co_ y_dd_ 0.3864023685455322_co_ z_dd_ -0.7100901007652283_lt_/pre_gt__lt_p_gt_Now I recognize some of this code_co_ but I do not know what is going on yet.  If someone can enlighten me on what I might try next_co_ I would be grateful._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-06-28T06:28:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_Is there even any hope that this could be exportable from Blender to BabylonJS?_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ with your programming skills and those of others around here_co_ I think so _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_This produced a lot of output_lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Which actually told me something - I had not applied my scaling _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_ohmy.png_qt_ alt_eq__qt__dd_o_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/ohmy@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Select the cloth/plane with right mouse click_co_ then  hit the N key - a properties bar appears.  Go to the very top of the bar that appears - to Transform and look at the scale values. To apply the scale_co_ with the cloth still selected go to the menu bar for that window and Object-&gt_sm_Apply-&gt_sm_Scale. The scale values change to one._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now run your scripts again. Do the values for the keys change?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What you are seeing are the vertex co-ordinates for each vertex for the _qt_Basis Key/Block_qt_ which is the undeformed mesh and from which all other keys are made. The _qt_Draped Key/Block_qt_ has a set of the deformed vertex co-ordinates. What is missing in your log is the vertex number to show how they match up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The animation (the timeline for the Shape Key Editor) has only one Shape Key (Draped) but you will see the contribution fraction for each key frame (far left of that window_co_ move/scrub the green line along the timeline). So the animation is a blend between the _qt_Basis Key_qt_ and the _qt_Draped Key_qt_ How easy is that to do ? Does it have to be done for all vertex co-ordinates?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Looking at _qt__lt_em_gt_the Blender doc I got my info from_lt_/em_gt__qt_ I see _qt__lt_u_gt_use_relative_lt_/u_gt__qt_. What does that do? Give relative changes to the vertex co-ordinates? Only list co-ordinates that change?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My lipsynced head that you post a link to has 3 shape keys but  only vertices  around the mouth are changing - the rest don_t_t change. So can only the changing vertices be used with the _qt_Basis Key_qt_ or will all vertex co-ordinates for each shape key have to be stored somewhere?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Just some initial thoughts - will have more time next week when visitors are gone._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-29T18:02:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just a quick answer so far. Did apply the scale_co_ and yes I do see that the basis has very similar values as the positions &amp_sm_ exact same length_co_ just have a mixed up order.  Need to fix the order so it matches.  Have done some plumbing work_co_ on the Tower of Babel side  I am generating the shape key blocks as javascript functions_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_Cloth.prototype.getBasis _eq_ function () {        return [3_co_0_co_-3_co_-3_co_0_co_-3_co_3_co_0_co_3_co_-3_co_0_co_3_co_2.4545_co_0_co_-3_co_1.9091_co_0_co_-3_co_1.3636_co_0 ...]_sm_}_sm_Cloth.prototype.getDraped _eq_ function () {        return [1.2879_co_-2.6859_co_-1.5983_co_-1.3601_co_-2.7179_co_-1.5108_co_1.5066_co_-2.7339_co_...]_sm_}_sm__lt_/pre_gt__lt_p_gt_Also_co_ changed the updateable to true for the position vertices &amp_sm_ normals.  Finally_co_ I have changed the superclass of Cloth to DeformableMesh_co_ which is a hand built BABYLON.Mesh subclass_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var DeformableMesh _eq_ (function (_super) {\t__extends(DeformableMesh_co_ _super)_sm_\tfunction DeformableMesh(name_co_ scene){            _super.call(this_co_ name_co_ scene)_sm_            this.numOfDeformSteps _eq_ 100_sm_\t}        // optional callback to super-class_co_ performed by constructor of Tower of Babel generated code        DeformableMesh.prototype.postInit _eq_ function () {            this._scene.registerBeforeRender(DeformableMesh.prototype.incrementallyDeform)_sm_        }_sm_                DeformableMesh.prototype.incrementallyDeform _eq_ function () {            console.log(_t_In incrementallyDeform _t_)_sm_        }_sm_                DeformableMesh.prototype.getBasis _eq_ function () {            return [0]_sm_        }_sm_                DeformableMesh.prototype.getDraped _eq_ function () {            return [0]_sm_        }_sm_        \treturn DeformableMesh_sm_})(BABYLON.Mesh)_sm__lt_/pre_gt__lt_p_gt_Right now it does not do anything_co_ but if I can get the order of keys to positions to match_co_  I can try to do a 100 step deformation by interpolating the positions by 1/100 serially.  This is essentially doing it with the CPU_co_  but in rapid prototyping this does not matter.  None of this would go to production.  Its just the first step in my mind.  The weekend is just too nice to waste anymore of. bye._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-30T21:45:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Quick update_dd_  The order in the Cloth.getBasis() function now matches the positions buffer exactly!  Turns out you cannot just put out shape keys_co_ or vertex colors_co_ etc in Blender native vertex order.  The Babylon order is tessfaces with in each similar material.  The similar material sort is so submeshes can easily be simple ranges for fragment shaders_co_ I think.  Not sure why when you actually have no materials_co_ would the Babylon order to be the same as native_co_ but it is different.  You would think I would know that_co_ but it did not occur to me at the time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Toggling back to the Babylon side!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Fluff rabbit_dd_  To start_co_ it might just be terminology but to be more exact_co_ shape keys are final values of all vertex positions when a deformation is complete.  How this is important is let_t_s say you have a hand.  This hand has the shape keys of_dd_  Open(Basis)_co_ closed_co_ pointing_co_ peace sign_co_ _qt_the finger_qt__co_ _qt_the devil_qt__co_ &amp_sm_ _qt_thumbs up/down_qt_.  7 endpoints_co_ or shape keys in total.  If I am wrong I will know very shortly._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There should be 7 * 7 _eq_ 49 direct deformations possible_co_ e.g. going directly from pointing to peace sign.  Look-up table just does not seem accurate enough.  gryff said up above that the talking mouth only had 3 shape keys.  If you were going to do the hand with bones_co_ not only would you have to put them in_co_ but you would have to do 49 animations_co_ where you would have to pose the fingers for each frame._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Second_co_  my linear piece of shit experiment is wrong in so many ways_co_ and nobody should think otherwise.  First linear.  There is data I have not even found yet which you can tell blender how fast certain each phase of the deformation should occur.  It is not even about how fine the number of steps is._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also your assumption is incorrect about all the processing being done at load time.  What _lt_span_gt_registerBeforeRender() does is tell_lt_/span_gt_ babylon to call my _lt_span_gt_incrementallyDeform() each frame.  Yes_co_ I could the work at load time_co_ but if there maybe 49 possible deformations it gets not feasible quick.  Plus that_t_s pushing a lot of data (vertices &amp_sm_ normals) up to the gpu_co_ every frame._lt_/span_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-30T23:13:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Correction 7 * 7 _eq_ 49_co_ but some of these would be like peace sign to peace sign.  Should be 7 * (7 - 1) _eq_ 42_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-01T17:43:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_update_co_ I_t_m through_co_ it works!  Have just made a total mess though_co_ took out the DeformableMesh intermediate class_co_ shoving a lot of code to the web page_co_ and manually changing the way setVerticesData() get called in the generated Cloth constructor - switched to _qt__super.prototype.setVerticesData.call(this_co__qt_.  All to do with the fact that cloth.updateVerticesData() did not acknowledge _geometry existed.  Nothing was happening.  Have to step wise undo the mess_co_ &amp_sm_ will publish.  Good exercise for Tower of Babel extensibility though.  This is my first Javascript program (python too)_co_ &amp_sm_ this subclassing illusion thing is tricky._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also see an older thread close to this subject_dd_ _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/6441-mesh-morph-animation-in-babylonjs/?hl_eq_setverticesdata#entry38399_qt__gt_http_dd_//www.html5gamedevs.com/topic/6441-mesh-morph-animation-in-babylonjs/?hl_eq_setverticesdata#entry38399_lt_/a_gt_ .  I do not view this as morphing_co_ as in my mind that might mean the # of veritices could change.  Terminology aside_co_ my experiments will continue.  Their primary purpose is to find and validate the Blender shape-key data.  Good to know this was already being planned.  Hey_co_ I can handle the Blender side_co_ others may be interested in doing the vertex shader side.  I have GPGPU &amp_sm_ OpenCL experience_co_ but it would take me much longer than others._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-01T19:56:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ here is the result of the first test.  It is all code_co_ so you can just double-click inline.html_co_ without putting it your local web-server.  This is an unaltered cloth1a.js that was generated.  Did change the base class custom property of the Cloth mesh back to BABYLON.Mesh in the .blend file (not included).  Still sent deformableMesh.js in the .zip &amp_sm_ it is still included in .html_co_ but it does not get used.  The DeformableMesh equivalent code is in the .html ._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Not sure why _geometry is not found in the updateVerticesData() call_co_ but it might have something to do with scene.registerBeforeRender() being passed a prototype.  Was not worth holding this up.  Any pointers appreciated. _lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// optional callback to super-class_co_ performed by constructor of Tower of Babel generated codeDeformableMesh.prototype.postInit _eq_ function () {    this.basis  _eq_ this.getBasis()_sm_    this.draped _eq_ this.getDraped()_sm_    this.nVertexCoords _eq_ this.basis.length_sm_    this._scene.registerBeforeRender(DeformableMesh.prototype.incrementallyDeform)_sm_}_sm_        DeformableMesh.prototype.incrementallyDeform _eq_ function () {    var count _eq_ this.count_sm_    var pctComplete _eq_ this.count / this.numOfDeformSteps_sm_    if (pctComplete _eq__eq__eq_ 0 || pctComplete &gt_sm_ 1) return_sm_                var increment _eq_ []_sm_    for (i _eq_ 0_sm_ i &lt_sm_ this.nVertexCoords_sm_ i++){        increment.push(this.basis[i] + ((this.draped[i] - this.basis[i]) * pctComplete))_sm_    }    // THIS call does not find _geometry in _super    _super.prototype.updateVerticesData.call(this_co_ BABYLON.VertexBuffer.PositionKind_co_ increment_co_ false_co_ true)_sm_     this.count++_sm_}_sm__lt_/pre_gt__lt_p_gt_On to finding / exporting this _qt_timing data_qt_ for non-linear deformations!_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2117_qt__gt_tablecloth2.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-02T19:06:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_gryff_dd__lt_/p_gt__lt_p_gt_About the part above where only some of the veritices might be involved in a deformation_dd_   I agree_co_ if the affected vertices can be isolated on the TOB side (it_t_s just CPU_co_ on a development machine at that)_co_ we might be able send over just those end xyz positions_co_ and the babylon index of each._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But let_t_s say_co_ someone made an entire body as a single mesh.  They could have shape keys for the mouth_co_ hands_co_ and the whole thing walking.  Isolation across all keys could yield pretty poor improvement.  What I was thinking was there could be shape-key groups_co_ controlled by how the key is named in the form group-state_dd_ (Mouth-open_co_ Mouth-closed)_co_ (Hand-pointing_co_ Hand-peace sign_co_...).  Isolation would be limited_co_ to all vertices which were not identical across all keys of a group. Key names made not case sensitive._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It could be enforced by ignoring all keys without a _t_-_t__co_ and not a least 2 of the same group.  Remember my exporter has a log file_co_ so the modeller would have a way to find out what the complaint is._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Literally_co_ _t_walking and chewing gum at the same time_t_ might not be doable right now_co_  BUT I think it is very important that the data not get represented in such a way that would preclude it.  Well at least as far as to Javascript.  All the way to vertex buffer objects might not be crucial._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What do you or anyone think?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-02T22:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_But let_t_s say_co_ someone made an entire body as a single mesh.  They could have shape keys for the mouth_co_ hands_co_ and the whole thing walking._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A pretty common approach except for perhaps the eyes_co_teeth and any weapons that may be picked up._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The picture below illustrates how I approached creating the talking head. Before I created any shape keys I created _qt__lt_em_gt_vertex groups_lt_/em_gt__qt_ that defined collections of vertices. I do this so that if I want to tweak a shape key later_co_ In the Blender Edit Mode_co_ with all vertices deselected_co_I can select a vertex group and hit the Select button - then tweak the shape keys. I_t_m always using the same vertices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Now in addition to creating your own vertex groups_co_ when you parent a mesh to a rig/armature shape keys are automatically created for each bone in the rig - so if you have bones Hand.L and Hand.R then vertex groups will automatically be created with those names._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe more food for thought?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-7026-0-36528900-1404339114.jpg_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_07_2014/post-7026-0-36528900-1404339114.jpg_qt_ data-fileid_eq__qt_2123_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-7026-0-36528900-1404339114.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-03T02:33:42Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_More indeed.  First_co_ making life easier for yourself by creating vertex groups_co_ sounds smart for model development_co_ but is both optional and not a guaranteed to get the perfect info.  Isolating all affected by comparison might be slower_co_ but time to building exports is not nearly as important as how fast it is in Babylon._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Need a little clarification when you said_co_ parenting bones to an armature creates shape keys.  You meant vertex groups_co_ not shape keys right?  I re-exported man1_co_ with the latest exporter and got no shape keys._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am starting to weight in my mind the trade-offs of different approaches.  The first_dd__lt_/p_gt__lt_p_gt_--------------------_lt_/p_gt__lt_p_gt_- CPU calculating positions verses in the vertex shader_dd__lt_/p_gt__lt_p_gt_    - Doing in the CPU could easily make the system CPU bound_co_ not good for WebGL that can only use 1 core._lt_/p_gt__lt_p_gt_    - Being able to isolate the vertices &amp_sm_ possibly updating directly to Float32Array should help_co_ but the whole mesh position buffer still needs to be copied to GPU each deformation._lt_/p_gt__lt_p_gt_    - CPU could also not be so bad_co_ if it was not a constant/looped effect._lt_/p_gt__lt_p_gt_    - The notion of Instances is incompatible with calculating on the CPU for sure._lt_/p_gt__lt_p_gt_    - The vertex shader might be to do the positions_co_ if it was the whole mesh not just parts.  Having an arbitrary number of shape keys or having them operate on less than the whole mesh might prove very difficult.  _lt_/p_gt__lt_p_gt_    - Vertex shaders number and types of parameters are determined at program design time.  Might be able to have 2 optionally used parameters &amp_sm_ data buffers just for the current shaping process.  Add one more for the step completed ratio.  Suppose you could even another of the indexes of the isolated vertices._lt_/p_gt__lt_p_gt_--------------------_lt_/p_gt__lt_p_gt_- CPU calculating normal verses in the vertex shader_dd__lt_/p_gt__lt_p_gt_   - Fortunately this should be calculatable on the vertex shader regardless of where the new positions were done._lt_/p_gt__lt_p_gt_   - If they are calc_t_d on the vertex shader_co_ then they would not have to be transported up like the positions._lt_/p_gt__lt_p_gt_Ref_dd_  _lt_a href_eq__qt_http_dd_//www.opengl.org/wiki/Calculating_a_Surface_Normal_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.opengl.org/wiki/Calculating_a_Surface_Normal_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Sounds like CPU for positions &amp_sm_ GPU for the normals might be the best way to go.  I was very set against using CPU_co_ but limiting some of the calcs thru analysis by the exporter might be enough.  _t_Walking an chewing gum at the same time_t_ seems unlikely to ever be achieved with calcing positions on GPU_co_ as the number of parameters would have to arbitrary to handle multiple sets of shape keys simulataneously.  Not sure how many people would use it_co_  but it should not cost you when only one at a time is used._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-08T17:54:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_gryff_co__lt_/p_gt__lt_p_gt_I recently downloaded the .blend files from Blender support that Wingnut posted the link for.  There is like 330 of them _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ .  Noticed one in the animation sub-directory that was very good (attached as .txt)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_There is no armature_co_ nor shape keys.  A lot of nodes.  What is doing this animation?  Would have been the perfect .blend to test _qt_shape key groups_qt_ concept_co_ if it had them._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2163_qt__gt_driver-object-eyes.blend.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"gryff","Date":"2014-07-08T20:48:51Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt_There is no armature_co_ nor shape keys._lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_co_ it is a whole different way of doing animation using lattice modifiers (the cages around the eyeballs)_co_ empties (objects that do not have vertices - all those arrow only objects) and hooks._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It is not a methodology that I know a lot about. I_t_ve used lattices for modifying meshes - example with a human figure creating a lattice around the mid body area can allow you to change the waist thickness. The lattice has fewer vertices then the humanoid mesh and changing a lattice vertex or group of vertices will modify the more complex mesh by changing the all the vertices close to to the chosen lattice vertices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The lattice can be used to create animations of the mesh as the lattice only modifies vertices with its boundary. So if you shape the vertices of the lattice from the box shape_co_  then pass an object mesh though the lattice_co_  then as the mesh moves through the lattice the mesh vertices get changed to reflect the shape of the lattice. (think of a snake wriggle animation or moving a tail)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What this example shows is rather than having a fixed lattice_co_ the empties through a second modifier - a hook modifier - are animating the lattice which in turn is modifying the mesh inside it._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Given that there are _lt_u_gt_two_lt_/u_gt_ modifiers at work here_co_ how this would work as an animation in .babylon/TOB I have no idea._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_cheers_co_ gryff _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-07-11T13:17:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Update_co_ shape-key group analysis / building on the TOB side is done.  On the Javascript side_co_ have decided on a 4 class system_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_ol_gt__lt_li_gt_Automaton - Sub-class of BABYLON.Mesh (beforeRender() queries each ShapeKeyGroup for changes)_lt_/li_gt_\t_lt_li_gt_ShapeKeyGroup - Hold each shape key_co_ &amp_sm_ processes a queue of  Deformation objects_lt_/li_gt_\t_lt_li_gt_Deformation - Holds info of end state_co_ milli duration_co_ millis before_co_ ratio of end state_co_ Pace_co_ any prerequisites_lt_/li_gt_\t_lt_li_gt_Pace - Interpolation object_sm_ completion milestone calculator_sm_ non-linear capable_lt_/li_gt__lt_/ol_gt__lt_br_gt__lt_p_gt_Each of the classes is underway.  Pace is complete_co_ though untested_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_var BABYLON_sm_/** @immutable_co_ reusable  * completionRatios[] - values from (&gt_sm_ 0 to 1.0)_co_ not required to increase from left to right_co_ for _t_hicup_t_ effects * durationRatios  [] - values from (&gt_sm_ 0 to 1.0)_co_ MUST increase from left to right *  * The last value of BOTH args must be 1.0. * Straight line interpolation between duration Ratio elements. */var Pace _eq_ (function () {    function Pace(completionRatios_co_ durationRatios){        // argument validations        if (!completionRatios instanceof Array || !durationRatios instanceof Array) throw new UserException(_qt_ratios not arrays_qt_)_sm_        if (completionRatios.length !_eq__eq_ durationRatios.length) throw new UserException(_qt_ratio arrays not of equal length_qt_)_sm_        this.steps _eq_ completionRatios.length_sm_                if (this.steps _eq__eq__eq_ 0) throw new UserException(_qt_ratio arrays cannot be empty_qt_)_sm_                var cRatio_co_ dRatio_co_ prevD _eq_ -1_sm_        for (i _eq_ 0_sm_ i &lt_sm_ this.steps_sm_ i++){            cRatio _eq_ completionRatios[i]_sm_            dRatio _eq_ durationRatios  [i]_sm_            if (cRatio &lt_sm__eq_ 0 || dRatio &lt_sm__eq_ 0) throw new UserException(_qt_ratios must be &gt_sm_ 0_qt_)_sm_            if (cRatio &gt_sm_  1 || dRatio &gt_sm_  1) throw new UserException(_qt_ratios must be &lt_sm__eq_ 1_qt_)_sm_            if (prevD &gt_sm__eq_ dRatio) throw new UserException(_qt_durationRatios must be in increasing order_qt_)_sm_            prevD _eq_ dRatio_sm_        }        if (cRatio !_eq__eq_ 1 || dRatio !_eq__eq_ 1) throw new UserException(_qt_final ratios must be 1_qt_)_sm_                // public member assignment for all_co_ since immutable        this.completionRatios _eq_ completionRatios_sm_        this.durationRatios _eq_ durationRatios_sm_                this.incremetalCompletionBetweenSteps _eq_ [completionRatios[0]]_sm_ // elements can be negative for _t_hicups_t_        this.incremetalDurationBetweenSteps   _eq_ [durationRatios  [0]]_sm_        for(i _eq_ 1_sm_ i &lt_sm_ this.steps_sm_ i++){            this.incremetalCompletionBetweenSteps.push(completionRatios[i] - completionRatios[i - 1])_sm_            this.incremetalDurationBetweenSteps  .push(durationRatios  [i] - durationRatios  [i - 1])_sm_        }               Object.freeze(this)_sm_  // make immutable    }        Pace.prototype.getCompletionMilestone _eq_ function (currentDurationRatio) {        // at start &amp_sm_ running late cases_co_ easier later to have broken out here        if (currentDurationRatio &lt_sm__eq_ 0) return 0_sm_        else if (currentDurationRatio &gt_sm__eq_ 1) return 1_sm_                var upperIdx _eq_ 0_sm_  // ends up being index into durationRatios 1 greater than highest obtained        for (_sm_ upperIdx &lt_sm_ this.steps_sm_ upperIdx++){            if (currentDurationRatio &lt_sm_ this.durationRatios[upperIdx])                 break_sm_        }        var baseCompletion _eq_ (upperIdx &gt_sm_ 0) ? this.completionRatios[upperIdx - 1] _dd_ 0_sm_                var interStepRatio _eq_ (this.durationRatios[upperIdx] - currentDurationRatio)/ this.incremetalDurationBetweenSteps[upperIdx]_sm_                return baseCompletion + (interStepRatio * this.incremetalCompletionBetweenSteps[upperIdx])_sm_    }_sm_           Pace.LINEAR _eq_ new Pace([1.0]_co_ [1.0])_sm_    return Pace_sm_})()_sm__lt_/pre_gt__lt_p_gt_Pace_co_ puts as much effort it can into the constructor_co_ so as little as possible is required in getCompletionMilestone().  There is also a static Pace.LINEAR prebuilt.  Getting closer._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Jeff_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]