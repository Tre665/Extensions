[{"Owner":"1glayfan","Date":"2018-03-02T01:14:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello babylonjs experts_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wonder if it is possible to build the babylonjs src using webpack/angular._lt_br /_gt_\n\tI tried to this this but hit into the following error messages_dd__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_ERROR in src/Audio/babylon.analyser.ts(65_co_13)_dd_ error TS2322_dd_ Type _t_Float32Array_t_ is not assignable to type _t_Uint8Array_t_.\n  Types of property _t_[Symbol.toStringTag]_t_ are incompatible.\n    Type _t__qt_Float32Array_qt__t_ is not assignable to type _t__qt_UInt8Array_qt__t_.\nsrc/Mesh/babylon.geometry.ts(1120_co_76)_dd_ error TS2345_dd_ Argument of type _t_Int32Array_t_ is not assignable to parameter of type _t_number[] | Float32Array_t_.\n  Type _t_Int32Array_t_ is not assignable to type _t_Float32Array_t_.\n    Types of property _t_copyWithin_t_ are incompatible.\n      Type _t_(target_dd_ number_co_ start_dd_ number_co_ end?_dd_ number) _eq_&gt_sm_ Int32Array_t_ is not assignable to type _t_(target_dd_ number_co_ start_dd_ number_co_ end?_dd_ number) _eq_&gt_sm_ Float32Array_t_.\n        Type _t_Int32Array_t_ is not assignable to type _t_Float32Array_t_.\nsrc/Mesh/babylon.mesh.vertexData.ts(1743_co_66)_dd_ error TS2345_dd_ Argument of type _t_IndicesArray_t_ is not assignable to parameter of type _t_number[] | Float32Array_t_.\n  Type _t_Int32Array_t_ is not assignable to type _t_number[] | Float32Array_t_.\n    Type _t_Int32Array_t_ is not assignable to type _t_Float32Array_t_.\nsrc/Tools/babylon.dds.ts(289_co_13)_dd_ error TS2322_dd_ Type _t_Uint8Array_t_ is not assignable to type _t_Float32Array_t_.\n  Types of property _t_[Symbol.toStringTag]_t_ are incompatible.\n    Type _t__qt_UInt8Array_qt__t_ is not assignable to type _t__qt_Float32Array_qt__t_.\nsrc/Tools/babylon.dds.ts(311_co_13)_dd_ error TS2322_dd_ Type _t_Uint8Array_t_ is not assignable to type _t_Float32Array_t_.\nsrc/Tools/babylon.tools.ts(1214_co_13)_dd_ error TS2322_dd_ Type _t_ArrayBuffer | SharedArrayBuffer_t_ is not assignable to type _t_ArrayBuffer_t_.\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tIf you have done this successfully with webpack or angular_co_ please let me know.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-03-02T02:56:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou are using the babylonjs source?  I haven_t_t had any issues with NPM and webpack - here are the docs_dd__lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//doc.babylonjs.com/features/npm_support_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/features/npm_support_lt_/a_gt__lt_br /_gt_\n\tIf that doesn_t_t work can you provide more information - is your project TypeScript or JavaScript_co_ which version of BabylonJS.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"1glayfan","Date":"2018-03-02T03:34:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI do use bjs npm package for normal development. My codes are all in ts. I try to avoid js as much as possible. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut here I am trying to build my project with bjs ts  source codes directly (so no bjs npm here)_co_ with goals being_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) I can single step debug into bjs codes for hard bugs\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) I can single step for better understanding of the bjs framework \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe docs you mentioned AFAIK is only for using the npm package? I am currently outside now but will look into again soon. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"brianzinn","Date":"2018-03-02T04:10:54Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYou did say you were using source_co_ but I was just confirming.  You are correct - docs are only for NPM package.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStepping through bjs TS code with these instructions_co_ but only for ie_dd_ Playground_co_ Sandbox_dd__lt_br /_gt_\n\tVS Code - _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/how_to_start#debug_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/how_to_start#debug_lt_/a_gt__lt_br /_gt_\n\tVisual Studio - _lt_a href_eq__qt_https_dd_//doc.babylonjs.com/how_to/setup_visualstudio_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//doc.babylonjs.com/how_to/setup_visualstudio_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_ve actually never tried to step through a dependent project in TypeScript - another option is to use babylon.max and step into JS.  Hopefully somebody can help you out.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"1glayfan","Date":"2018-03-02T04:32:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI did look into the VS config to build bjs_co_ I think I got it working for VS_co_ but what I am trying to do here is on webpack/angular though which is different.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe webpack/angular env is quite a beast to master unfortunately.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes you are right that Babylon.max will let you single step but my head will spin forever every time I see js codes _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]