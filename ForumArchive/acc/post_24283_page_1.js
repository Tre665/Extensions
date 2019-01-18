[{"Owner":"Gwir","Date":"2016-08-04T16:23:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI need to scale a mesh along global axis. The mesh.scaling attribute refers to mesh local axis so it_t_s useless to me.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI managed to scale the mesh through the direct manipulation of the worldMatrix_co_ but when i rotate the mesh the worldMatrix is reset to its original values and scaling and position data is lost.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI also tried to call the bakeCurrentTransformIntoVertices() function after scaling the mesh_co_ but the mesh loses its position and gets other unwanted behaviours.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to avoid the trick of parenting the mesh and scale the parent instead of the mesh.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there a way to scale a mesh along a global axis?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-08-04T17:51:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI would say_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Convert your global axis to local axis\n_lt_/p_gt_\n\n_lt_p_gt_\n\t- Scale accordingly\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPseudo-code_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var globalAxisScale _eq_ new BABYLON.Vector3(0.5_co_ 2.0_co_ 1.0)_sm_\nvar inverted _eq_ BABYLON.Matrix.Invert(mesh.getWorldMatrix())_sm_\nvar localAxisScale _eq_ BABYLO.Vector3.TransformNormal(globalAxisScale_co_ inverted)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-04T18:22:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tEither I_t_m doing it wrong_co_ or that isn_t_t going to work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF2KO%230_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF2KO#0_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gwir","Date":"2016-08-05T10:59:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tStill a scaling along the mesh local axis. I need it to be along the global one_co_ even if it cause the _qt_stretching_qt_ of the mesh.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-05T20:18:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI created a worldSpaceScale function in this PG_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF2KO%233_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF2KO#3_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt_t_s modifying the positions of the vertices_co_ so you have to make the mesh updatable.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere is another version that resets the rotation_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF2KO%237_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF2KO#7_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gwir","Date":"2016-08-08T18:02:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you very much_co_ it works.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tWhat happens if the scaling needs to be on the camera axis?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"adam","Date":"2016-08-08T18:32:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139196_qt_ data-ipsquote-contentid_eq__qt_24283_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1470679332_qt_ data-ipsquote-userid_eq__qt_21863_qt_ data-ipsquote-username_eq__qt_Gwir_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t31 minutes ago_co_ Gwir said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tWhat happens if the scaling needs to be on the camera axis?\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tLike this?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#TF2KO%239_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#TF2KO#9_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Gwir","Date":"2016-08-08T18:51:28Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tExactly_co_ thank you very much!\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]