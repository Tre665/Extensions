[{"Owner":"heyzxz","Date":"2016-12-15T07:19:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi there_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease see the test case_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1YGHUR%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1YGHUR#0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThere are 11 red spheres_co_ the first(nearest) one is made by _t_BABYLON.Mesh.CreateSphere_t__co_ and the rest 10 are instancedMeshes.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAt Line 27_dd_ the material.freeze() is called.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt__lt_strong_gt_PROBLEM_lt_/strong_gt__lt_/span_gt__dd_ _lt_span style_eq__qt_color_dd_#ff0000_sm__qt__gt_Drag the camera to make all the 10 instancedMeshes get out of the view_co_ then you_t_ll see the ground suddenly gets disappeared._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/585241aa37f41_ScreenShot2016-12-15at3_09_00PM.png.66d2852d865d47141629e03b33dc76b5.png_qt_ data-fileid_eq__qt_10768_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10768_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/585241ab23627_ScreenShot2016-12-15at3_09_00PM.thumb.png.6ae9c3e61a68df1af2075e1f6853a04b.png_qt_ style_eq__qt_width_dd_400px_sm_height_dd_auto_sm__qt_ alt_eq__qt_Screen Shot 2016-12-15 at 3.09.00 PM.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf comment the line 27 ( do not call material.freeze() )_co_  then this problem NOT happen.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/585241e76360f_ScreenShot2016-12-15at2_43_21PM.png.b59762ce56beb6fe4c78ce97f9b5fe4a.png_qt_ data-fileid_eq__qt_10769_qt_ rel_eq__qt__qt__gt__lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_10769_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2016_12/585241e8c5053_ScreenShot2016-12-15at2_43_21PM.thumb.png.41c74ca67d36f861f0cb8cb225826c7d.png_qt_ style_eq__qt_width_dd_400px_sm_height_dd_auto_sm__qt_ alt_eq__qt_Screen Shot 2016-12-15 at 2.43.21 PM.png_qt_ /_gt__lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTested Environment_dd_ Chrome 55_co_ MacOS 10.12.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso tested on windows chrome and mac safari_co_ not found this problem. So it looks a mac chrome only problem.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-12-15T15:38:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHello this seems to be a Chrome related issue. Did you check on their bugs Database? Perhaps it is a known issue\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]