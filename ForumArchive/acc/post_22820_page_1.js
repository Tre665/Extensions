[{"Owner":"kay","Date":"2016-05-27T13:02:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI just started using Babylon.js for a proof of concept. So I_t_m a noob about everything 3D.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI tried the tutorials. Created a basic sceen. Loaded a texture and heightmap_co_ created a ground with them and now I get position data over WebSockets.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tEvery 100ms I get all positions of all active objects. So sometimes I get positions that didn_t_t change_co_ sometimes objects are missing and sometimes new objects show up.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy update function looks something like this_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_const spheres _eq_ {}\n\nupdates _eq_&gt_sm_ {\n\n  for (const sphereId in updates ) {\n\n    const update _eq_ updates[sphereId]\n    let sphere _eq_ spheres[sphereId]\n\n    if(!sphere) {\n\n      sphere _eq_ BABYLON.Mesh.CreateSphere(_qt_Sphere-_qt_ + sphereId_co_ 5_co_ 5_co_ scene_co_ true)\n      sphere.material _eq_ new BABYLON.StandardMaterial(_qt_texture-_qt_ + sphereId_co_ scene)\n      sphere.material.diffuseColor _eq_ new BABYLON.Color3(\n        Math.random()_co_\n        Math.random()_co_\n        Math.random()\n      )\n\n      spheres[sphereId] _eq_ sphere\n\n    }\n\n    const p _eq_ sphere.position\n\n    if (p.x !_eq__eq_ update.x) p.x _eq_ update.x \n    if (p.y !_eq__eq_ update.z) p.y _eq_ update.z\n    if (p.z !_eq__eq_ update.y) p.z _eq_ update.y\n\n  }\n\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tI think the better way to move them_co_ so they don_t_t jump is using an animation_co_ but I haven_t_t learned them yet.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnyway_co_ after I looked into the the timeline of Chrome dev-tools_co_ I noticed bad frame-timings also bad garbage collection.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHow do I do this right?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ data-fileid_eq__qt_7828_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/timeline.png.6fe00013de0a5b0fdb2fc2d7879f27c8.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img alt_eq__qt_timeline.png_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_7828_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/timeline.thumb.png.be0899a15bac90c8356628480e95727b.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kay","Date":"2016-05-29T10:39:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMy research has shown_co_ that the GC isn_t_t that of a problem. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe canvas size is. If I go to 640x480 I get 59fps_co_ but when I go higher the framerate starts to drop.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-29T18:44:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tCan you share an example on the playground?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kay","Date":"2016-05-30T08:24:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOkay_co_ this is based on my latest iteration_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1RGOCQ%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1RGOCQ#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think_co_ I now understand how animations work and why they_t_re designed that way. (starting based on frames and entity and not based on animations_co_ etc.)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut I don_t_t know if I still got everything right _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tLike_co_ when I update the animation frames_co_ I get the animation based on array index_co_ which seems rather hacky.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"kay","Date":"2016-05-30T09:46:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthis is my new performance. getting better _lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n_lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/3d_perf.jpg.b5b44d9b7dffc13bd9f0607cd4bacf34.jpg_qt_ class_eq__qt_ipsAttachLink ipsAttachLink_image_qt__gt__lt_img data-fileid_eq__qt_7863_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_05/3d_perf.jpg.b5b44d9b7dffc13bd9f0607cd4bacf34.jpg_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_3d_perf.jpg_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-05-31T03:47:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tLooks good to me..\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe GC may comes from the new Vector3 that you create every 100ms. (You also create a new array of keys)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]