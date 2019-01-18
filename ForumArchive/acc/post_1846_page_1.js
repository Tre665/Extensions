[{"Owner":"Temechon","Date":"2013-10-28T11:17:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello all_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have some performances issues when importing several scenes from Blender on tablet and some computers (with graphic drivers up to date)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have a page with several images displayed _dd_ when an image is displayed_co_ a scene is loaded (like on www.babylonjs.com)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I use this method to load a complete scene exported from Blender _dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_BABYLON.SceneLoader.Load(_qt_models/_qt__co_ modelName_co_ engine_co_ function (newScene) { })_lt_/pre_gt__lt_p_gt_In the callback function_co_ I set up my ArcRotate camera_co_ and a new light._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_My render function is very classical _dd_ scene.render() and stats display._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_u_gt_My problem is _lt_/u_gt__dd_ when I press the _qt_back_qt_ button_co_ and load another model (or the same one)_co_ I got a big FPS drop_co_ from 60 FPS to 30 FPS (my model has ~20000 vertices)_lt_/p_gt__lt_p_gt_My handler on the back button takes care to destroy my previous scene _dd_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_div_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_if (scene) {    scene.dispose()_sm_    scene _eq_ null_sm_}_lt_/pre_gt__lt_p_gt_Is there something missing in my scene clean up ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your help._lt_/p_gt__lt_/div_gt__lt_p_gt_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-10-28T11:34:31Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello could you compare to what we do on www.babylonjs.com ? The code is available on github (samples folder)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-10-28T14:30:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I compared your code to mine _dd_ It_t_s basically the same. Only the scene is destroyed_co_ and the engine is created each time you laod a new scene._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_But I think I got it _dd_ I have a increasing use of memory._lt_/p_gt__lt_p_gt_I load one of my model _dd_ 100 Mo used. I load it 5 times more _dd_ 190 Mo used. And it keeps going on and on._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I am using a single-page navigation model_co_ so my page is never reloaded. Only the scene is stored in a _qt_namespace global_qt_ variable to clean it up when creating a new one._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t understand what_t_s going on..._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-10-28T16:25:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_We also used a SPA for wwW.babylonjs.com. (And I_t_m not sure we recreate the engine for each scene)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-10-28T16:33:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You are right_co_ the engine is created once in the _qt_onload_qt_ function. My bad._lt_/p_gt__lt_p_gt_I will fix that up and get back to you._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-10-28T17:18:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_sure_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-10-28T17:59:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I think I found the problem._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I have to create an engine each time I select a new scene_co_ because otherwise the canvas element (which is in my selected page) is no more available _dd_ each time the _qt_back_qt_ button is called_co_ the canvas disappears._lt_/p_gt__lt_p_gt_With only one engine_co_ the first scene is displayed correctly_co_ but I have nothing for the next one (_lt_strong_gt_canvas.width _eq_ canvas.clientWidth _eq_ 0_lt_/strong_gt_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With one engine initialized for each scene (thus for each new one canvas element)_co_ I got performances issues. _lt_strong_gt_Engine.dispose()_lt_/strong_gt_ is correctly called though..._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Moreover_co_ I got huge memory issues_co_ and I think it is because of this. Could it be something not correctly done in the _lt_strong_gt_engine.dispose()_lt_/strong_gt_ method ? Maybe the webgl context is not released properly ?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I will try to create an unit test for this to reproduce it more clearly._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2013-10-29T07:53:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes an unit test would be great to help you_dd_)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-11-25T13:25:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I refresh this old topic _dd_ I finally got some time to create a unit test available here _dd_ _lt_a href_eq__qt_https_dd_//dl.dropboxusercontent.com/u/17799537/testMemory.zip_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//dl.dropboxusercontent.com/u/17799537/testMemory.zip_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is a windows 8.1 application created with visual studio 2013. Please don_t_t pay attention to the application style (it_t_s very ugly)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You can load the model available and see by yourself. If you load it several time (click on the tile -&gt_sm_ back -&gt_sm_ clic on the tile -&gt_sm_ back...) you will see that the memory used by the application is increased each time._lt_/p_gt__lt_p_gt_The scene and engine clean is in the page groupedItems.js. At each scene and engine unloading_co_ the memory used decreases_co_ but not totally._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you for your help._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"davrous","Date":"2013-11-29T19:35:12Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ I_t_ve just run the JavaScript memory profiler of VS 2013 and I can_t_t reproduce the issue. The memory consumption remains flat_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_img src_eq__qt_http_dd_//david.blob.core.windows.net/babylonjs/JSMemoryBabylonJS.JPG_qt_ alt_eq__qt_JSMemoryBabylonJS.JPG_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ It increases the first time when you load the model but then_co_ it only add 1K or less after several back/navigate actions. This is not significant. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_David_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Temechon","Date":"2013-12-02T09:37:26Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello David_co_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thank you very much for your answer and for your time._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_With the VS performance tool_co_ I don_t_t have the same result as yours_co_ it_t_s slightly different._lt_span style_eq__qt_font-size_dd_14px_sm__qt__gt_This is the result after 10 item load _dd_ _lt_/span_gt__lt_a href_eq__qt_http_dd_//imgur.com/AWesmMk_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/AWesmMk_lt_/a_gt__lt_/p_gt__lt_p_gt_As you can see_co_ the memory increases (not much_co_ I do agree) but is never released._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Moreover_co_ this is the result I have with the Windows tool _dd_ _lt_a href_eq__qt_http_dd_//imgur.com/a/IGryR_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//imgur.com/a/IGryR_lt_/a_gt__lt_/p_gt__lt_p_gt_The first image is at the very first start of the app._lt_/p_gt__lt_p_gt_The second one is after 10 load._lt_/p_gt__lt_p_gt_The third one is after more than 20 load._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_What I don_t_t understand in this is why does the memory consumption increase. I was thinking that after a model load and a back to the home page_co_ the memory would not change._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Cheers_co_ _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]