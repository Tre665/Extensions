[{"Owner":"Forest","Date":"2015-01-07T11:58:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_if i export scene from Maya to 3ds max and _qt_don´t touch anything_qt_(+ i freezed transformations in maya) _co_ everything gets exported well_co_even the physics work. However if i lets say change visibility on pCube1(Object properties-&gt_sm_turn off renderable)_co_everything falls apart_co_the walls get placed on weird spots._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Another weird thing is_co_the exporter is made for 3ds max and i was following exactly the steps _lt_a href_eq__qt_https_dd_//www.youtube.com/watch?feature_eq_player_detailpage&amp_sm_v_eq_0HpGSuNuQ_g#t_eq_11439_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.youtube.com/watch?feature_eq_player_detailpage&amp_sm_v_eq_0HpGSuNuQ_g#t_eq_11439_lt_/a_gt_ i copied the DLLs into F_dd_\\Program Files\\Autodesk\\3ds Max 2015\\bin\\assemblies and i created plane_co_box_co_camera_co_lights_co_ NOTHING gets exported. Even if i add something in that maya exported scene it says 0 vertices 0 faces on export. I really don´t know what am i doing wrong. Here is my maya file and the html/js code. Please help me guys_co_i have tried everything_co_ have been struggling with this for 3 days i wouldn´t ask you for help if i didn´t read the manual._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I couldn´t upload the maya file here on forum because of file size_co_link is here _lt_a href_eq__qt_http_dd_//www.filedropper.com/sachovnica_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/sachovnica_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_3400_qt__gt_model.html_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-07T12:18:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Forest_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Welcome _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_if i export scene from Maya to 3ds max and _qt_don´t touch anything_qt_(+ i freezed transformations in maya) _co_ everything gets exported well_co_even the physics work. However if i lets say change visibility on pCube1(Object properties-&gt_sm_turn off renderable)_co_everything falls apart_co_the walls get placed on weird spots._lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Maybe your pCube1 is the father or your scene. I know Maya create some weird relationship in your scene between your objects. All object father should be Scene root._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt__gt__lt_div_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_Another weird thing is_co_the exporter is made for 3ds max and i was following exactly the steps _lt_/span_gt__lt_a href_eq__qt_https_dd_//www.youtube.com/watch?feature_eq_player_detailpage&amp_sm_v_eq_0HpGSuNuQ_g#t_eq_11439_qt_ title_eq__qt_External link_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.youtube....SuNuQ_g#t_eq_11439_lt_/a_gt__lt_span style_eq__qt_color_dd_rgb(40_co_40_co_40)_sm_font-family_dd_helvetica_co_ arial_co_ sans-serif_sm__qt__gt_ i copied the DLLs into F_dd_\\Program Files\\Autodesk\\3ds Max 2015\\bin\\assemblies and i created plane_co_box_co_camera_co_lights_co_ NOTHING gets exported._lt_/span_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Can you please share your max file eventually ? I don_t_t have Maya installed on this computer._lt_/p_gt__lt_p_gt_Thank you !_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T12:24:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Temechon _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_here is the _qt_untouched max file_qt_ created with maya send scene to 3ds max. If you export this to babylon_co_the physics work_co_but objects fall through walls because i have condition to set them solid when they are not visible(if i set Object properties-&gt_sm_uncheck renderable the scene and then export from 3ds max the walls get placed on wrong spots)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_The problem with 3ds max i mentioned occurs even if you start 3ds max with blank scene_co_insert lets say plane and cube_co_0 vertices 0 faces export status._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Link to file _lt_a href_eq__qt_http_dd_//www.filedropper.com/sachovnica_1_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/sachovnica_1_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT_lt_/p_gt__lt_p_gt_for instance this is scene in 3ds max i get 0 vertices 0 faces export status _lt_a href_eq__qt_http_dd_//www.filedropper.com/gula_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/gula_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-07T13:28:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Same error with me with your scene (3DSMax 2015 last version of exporer). I don_t_t know if it_t_s a label problem or really if nothing is exported._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T13:33:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote data-ipsquote_eq__qt__qt_ class_eq__qt_ipsQuote_qt_ data-ipsquote-contentcommentid_eq__qt_66739_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentid_eq__qt_11545_qt_ data-ipsquote-username_eq__qt_Temechon_qt_ data-cite_eq__qt_Temechon_qt_ data-ipsquote-timestamp_eq__qt_1420637286_qt__gt__lt_div_gt__lt_div_gt__lt_p_gt_Same error with me with your scene (3DSMax 2015 last version of exporer). I don_t_t know if it_t_s a label problem or really if nothing is exported._lt_/p_gt__lt_/div_gt__lt_/div_gt__lt_/blockquote_gt__lt_p_gt_But you saw the guy in the video_co_he had empty scene and it worked for him. I don´t know which settings did he altered though to make it work._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-07T18:45:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I do not have 3dsmax 2015. Temechon_co_ could you try with just a cube? is it working on your side?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Is it possible to get the scene in 3dsmax 2013 version? can you share the output of the exporter? Are you creating regular meshes and not parametrics meshes?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T18:52:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Deltakosh_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_as i am aware_co_the max files work across 2013-2015_co_i was using 2013 before and it worked in 2015 the same way. I am creating a standard primitive-&gt_sm_ box. Here is the scene just with cube and the output of exporter._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.filedropper.com/model_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/model_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-07T18:58:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_3dsmax 2013 does not want to open your file because of a version issue _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ alt_eq__qt__dd_(_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T19:00:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Try to make standard primitive -&gt_sm_ box and use the babylon.js exporter it will export 0 faces 0 vertices._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_EDIT i saved it in 2013 compatibility max _lt_a href_eq__qt_http_dd_//www.filedropper.com/cube_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/cube_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-07T19:02:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_OK I can reproduce the issue!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Let me fix that quickly_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-07T19:10:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Workaround in the meantime_dd_ just assign a material to your box_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T19:14:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Deltakosh_dd_ Don´t worry_co_ i have deadline till sunday _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_ I have an oral exam tomorrow from effective algorithms_co_so have your fingers crossed. Then i need to make some animation on touch with this_co_that´s my assignment. I don´t know what they exactly expect_co_so i thought just to push the chess figures or grab them. If you fix it it would be great. You are a boss_co_ thank you for doing great work _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-01-07T19:15:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Fix published _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T19:16:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Where can i find it? On github you updated the DLL´s?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2015-01-07T19:21:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You have to download the new zip file _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Exporters/3ds%20Max/Max2Babylon-0.14.1.zip_qt_ title_eq__qt_Max2Babylon-0.14.1.zip_qt_ rel_eq__qt_external nofollow_qt__gt_Max2Babylon-0.14.1.zip_lt_/a_gt_ (containing the DLL)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Forest","Date":"2015-01-07T19:41:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Okay it seems you fixed this_co_its working now. But my issue must be related to something else. If i have the physics turned off the scene is rendered correctly_co_however the same problem occurs that the wall gets in the middle. Again_co_ this doesnt occur if i dont touche the exported scene from maya_co_then its correct. But when i turn off Renderable in Object properties and in Babylon properties on pCube1-6 i set check collision the wall gets in the middle. Please help me guys _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.filedropper.com/modeluntouched_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/modeluntouched_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.filedropper.com/modelchangedvisibility_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.filedropper.com/modelchangedvisibility_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_HTML/JS is the same file posted in first post_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]