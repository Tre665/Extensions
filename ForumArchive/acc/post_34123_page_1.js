[{"Owner":"Robin","Date":"2017-11-20T19:43:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_unsure_dd__qt_ data-emoticon_eq__qt__qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_unsure.png_qt_ title_eq__qt__dd_unsure_dd__qt_ /_gt_  Hi guys_co_ I am confused about texture uScale and vScale_co_ and need some help.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelow is my code and a screenshot of the result_co_ which is opposited to what I expect. For my understanding_co_ uScale_eq_2 will repeat image twice along x axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var groundMat _eq_ new BABYLON.StandardMaterial(_qt_ground_qt__co_  game.scene)_sm_\ngroundMat.diffuseTexture _eq_ new BABYLON.Texture(_qt_assets/ground.png_qt__co_ game.scene)_sm_\ngroundMat.diffuseTexture.uScale _eq_ 2_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15819_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/image.png.f9e86c4a33c02b94c183bba5ac6747d8.png_qt_ alt_eq__qt_image.png.f9e86c4a33c02b94c183bba5ac6747d8.png_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-20T19:48:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#XJHNXG_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#XJHNXG_lt_/a_gt__lt_br /_gt__lt_br /_gt_\n\tYour camera is just aligned wrong.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Robin","Date":"2017-11-20T20:22:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_img alt_eq__qt__dd_D_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ title_eq__qt__dd_D_qt_ width_eq__qt_20_qt_ /_gt_ Thank you for the reply. My camera is located same with the demo. But I used a box and scaled the y axis instead of calling the ground function. (Because I want the ground has a little thick)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs u know_co_ box has six faces_sm_ a ground has only one. What I can guess is_co_ uScale_eq_2 indeed repeat  texture twice  along u axis. For the box_co_ the u axis of its front face is along x axis_sm_ while the u axis of its top face may along y axis.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCorrect me if I am wrong. Thank you.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_img class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ data-fileid_eq__qt_15821_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_2017_11/blob.png.7d69b7adbf43325163df0ba05a8a0de0.png_qt_ alt_eq__qt_blob.png.7d69b7adbf43325163df0ba05a8a0de0.png_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2017-11-20T20:31:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tYou just need to construct your own cube then and have the uv’s aligned in the manor that will work for you.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-11-20T23:31:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tMore about custom UV_dd__lt_a href_eq__qt_http_dd_//doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors#box-faceuv_qt_ ipsnoembed_eq__qt_true_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/how_to/createbox_per_face_textures_and_colors#box-faceuv_lt_/a_gt_\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jerome","Date":"2017-11-21T08:25:17Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI_t_ll add the parameter to allow to build the box with custom UVs soon\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]