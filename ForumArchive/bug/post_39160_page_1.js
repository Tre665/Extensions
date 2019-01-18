[{"Owner":"sable","Date":"2018-07-30T05:13:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt seems like texture.updateSamplingMode() doesn_t_t actually work (though looking through the code_co_ it looks like it should_co_ as it_t_s making the right gl calls).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q9RDM0_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q9RDM0_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI noticed this as loading a .babylon file with sampling mode set wasn_t_t working (though the samplingMode property on the texture would be correct_co_ it was not rendering in that mode).\n_lt_/p_gt_\n\n_lt_p_gt_\n\t(And assuming that it should work_co_ _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/resources/file_format_map_(.babylon)#textures_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/resources/file_format_map_(.babylon)#textures_lt_/a_gt_ should probably be updated to include the samplingMode property)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2018-07-30T15:34:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYep this is definitely a bug..Let me check that (will be in next commit)\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-30T16:24:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tGood Catch_co_ it comes from the fact that the texture has not been loaded yet whilst you are trying to change the mode_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#Q9RDM0%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#Q9RDM0#2_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI will modify the code to ensure it works even before waiting for the end of the loading.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-07-30T23:34:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI looked deeper at the issue and it requires _dd_ _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4746_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/issues/4746_lt_/a_gt_ this one to be addressed first.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you have 2 workarounds_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Pass the information through the constructor\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Update once the texture has been loaded\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI ll fix it as part of the texture issue on Github (I updated the issue already). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlease _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/?do_eq_hovercard_qt_ data-mentionid_eq__qt_24742_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/24742-sable/_qt_ rel_eq__qt__qt__gt_@sable_lt_/a_gt_ let me know if that works for you.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"sable","Date":"2018-07-31T22:04:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah my use case is loading a model (.babylon format)_co_ and then applying a customMaterial to it (so I can modify the shaders). I was trying to just attach the texture from the original material to this new material and just update the sampling mode when I ran across the issue (after discovering that setting the sampling mode in the .babylon file was also didn_t_t work).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMy workaround was to just extract the url and make a new texture_co_ which I_t_ll continue to do for now_co_ as even waiting for the texture to load doesn_t_t seem to always work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks for looking into this.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]