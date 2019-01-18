[{"Owner":"jemonn","Date":"2014-09-30T18:39:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I_t_ve been trying to use Blender and Babylon together_co_ and exporting itself is fine (I wish the Tower of Babylon exporter would let you choose what file to export as so you didn_t_t have to delete the others all the time though)_co_ but the workflow in Blender itself is quite messy when using Cycles to bake textures_co_ however I_t_ve got an idea that seems like it could be plausible._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_In Cycles_co_ baking takes place in the node system_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10869-0-43773400-1412101804.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-10869-0-43773400-1412101804.png_qt_ data-fileid_eq__qt_2841_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-10869-0-43773400-1412101804.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The highlighted node (the last one selected) is the one that Cycles bakes to_co_ so if you can detect that node_co_ you have the baked texture. You could then export this image as the texture hooked up to a basic material (if you_t_re baking your textures_co_ I think we can assume you won_t_t need to change much on the base material?)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This would save time having to switch from Cycles to Blender Internal_co_ re-setting up the materials_co_ setting up textures then exporting. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_A couple of other things that would be nice in the exporter would be being able to assign a shader material in Blender_co_ instead of having to search through all materials on load and re-assign them_co_ and a way to turn down the opacity of a texture (I must be missing something here - but whenever I try to do it with a shadow map (black -&gt_sm_ in shadow_sm_ white -&gt_sm_ in light)_co_ changing the colour value under influences in textures seems to affect the alpha of the mesh instead of the opacity of the texture)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-09-30T20:06:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Look down in the lower left corner when exporting.  There are check boxes to select the files you want. If not_co_ get version 1.0.1 .  I do not know enough about cycles right now to comment on the rest._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]