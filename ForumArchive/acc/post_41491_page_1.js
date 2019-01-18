[{"Owner":"freetoplay","Date":"2018-11-24T20:03:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi_co_ I am getting an error when I try to loop through checking for tags.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn my code_co_ I have_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ let oldMesh _eq_ scene.meshes_sm_\n                    for (let i_eq_1_sm_ i &lt_sm_ oldMesh.length_sm_ i++) {\n                        BABYLON.Tags.EnableFor(oldMesh[i])_sm_\n                    }\n                    oldMesh[3].addTags(_qt_test_qt_)_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tInside my importMesh function_co_ I have_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_BABYLON.SceneLoader.ImportMesh(null_co_ _qt_/assets/_qt__co_ _qt_test.glb_qt__co_ scene_co_ function (meshes_co_ particleSystems_co_ skeletons) {\n                       meshes[0].position.y +_eq_ 1_sm_\n\n                        for (let i_eq_1_sm_ i &lt_sm_ oldMesh.length_sm_ i++) {\n                            console.log(oldMesh[i])_sm_ // this works fine\n                            console.log(oldMesh[i].hasTags())_sm_ // this throws an error\n                        }\n               \n                   })_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDoes anyone know know why the hasTags function is throwing an error in the loop?\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-11-25T08:36:35Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi FTP.  Sorry to hear you are having problems.  Could you build a playground demo... that reproduces the error?  That would be great.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAlso_co_ it might help to tell us WHAT error was seen.  thx.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Sebavan","Date":"2018-11-26T00:40:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_span style_eq__qt_background-color_dd_#23241f_sm_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_oldMesh_lt_/span_gt__lt_span style_eq__qt_color_dd_#f8f8f2_sm_font-size_dd_14px_sm__qt__gt_﻿_lt_/span_gt_ refers to scene.meshes so will change during import and you are not enabling tag again on the new elements.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYou need to create a new list if you want to keep track of some of them.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]