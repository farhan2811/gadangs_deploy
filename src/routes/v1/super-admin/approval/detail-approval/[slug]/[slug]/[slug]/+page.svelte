<script type="text/javascript">
	import { onMount, beforeUpdate } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../../../ApiController';
	import Carousel from 'svelte-carousel'
	import { browser } from '$app/environment';
	import { Stage, Layer, Rect, Transformer } from 'svelte-konva';
	import { jsPDF } from "jspdf";
	let sign = null
	let docs = null;
	let unit_datas;
	let unit_datas_real;
	let canvasDocs;
	let kanvaDocs;
	let docsIdentifierTemp;
	let docsIdentifierReal;
	let start_paging_ttd = 0;
	let temp_holder_ttd;
	let end_paging_ttd = 4;
	let count_paging_ttd = 0;
	let pagination_counter_ttd = 1;
	let docsViewer;
	let doc_set;
	let pageView;
	let rectangleConfig;
	let rectangleConfig2;
	let signConfig;
	let stageConfig;
	let signObject;
	let selectSign;
	let itemUrl;
	let transformer;
	let selectedShapeName = "";
	let id_frag;
	let numberPage;
	let stageData;
	let id_ttd;
	let frag_id;


	let getDetailDocs = () => {
		docsIdentifierTemp = window.location.href.slice(62);
		docsIdentifierReal = docsIdentifierTemp.split("/")
		ApiController({
			method: "GET",
			endpoint: `approval/${docsIdentifierReal[0]}/${docsIdentifierReal[1]}/detail`
		}).then(response => {
			docs = response.data.data.berkas[0]
			docs.fragment_surat.forEach((item, index) => {
				if (item.id_fragment_surat == unit_datas_real[2]) {
					id_frag = item
					frag_id = item.id_fragment_surat
				}
			})
		})
	}

	let getDetailSign = () => {
		ApiController({
			method: "GET",
			endpoint: `sign`
		}).then(response => {
			sign = response.data.data
			console.log(sign)
			for (var i = 0; i < sign.length; i++) {
				if (i % 4 == 0) {
					temp_holder_ttd == i;
					count_paging_ttd++;
				} else if(i > temp_holder_ttd) {
					count_paging_ttd++;
				}
			}
		})
	}

	let docsManager = (page) => {
		numberPage = page
		if (docs.type == "SPA") {
			docsViewer = pdfjsLib.getDocument(id_frag.dokumen).promise;
			console.log(docsViewer)
		    docsViewer.then((pdf) => {
		        pdf.getPage(1).then(function (doc) {
		            const scale = 1.5;
		            const viewport = doc.getViewport({ scale });

		            // Prepare canvas using PDF doc dimensions
		            // Clear the sign canvas
		            var canvas = document.createElement('canvas');
		            var ctx = canvas.getContext('2d');
		            canvas.height = viewport.height;
		            canvas.width = viewport.width;

		            // Render PDF doc into canvas context
		            var renderContext = {
		                canvasContext: ctx,
		                viewport: viewport
		            };

		            var renderTask = doc.render(renderContext);
				      renderTask.promise.then(function() {
				        pageView = canvas.toDataURL('image/png')
				       	doc_set = true;
				     });
		        });
		    });
		} else {
			docsViewer = pdfjsLib.getDocument(docs.berkas.dokumen).promise;
		    docsViewer.then((pdf) => {
		    	numPagesDocs = pdf._pdfInfo.numPages;
		        pdf.getPage(page).then(function (page) {
		            const scale = 1.5;
		            const viewport = page.getViewport({ scale });

		            // Prepare canvas using PDF page dimensions
		            // Clear the sign canvas
		            var ctx = canvasDocs.getContext('2d');
		            ctx.clearRect(0, 0, canvasDocs.width, canvasDocs.height);
		            canvasDocs.height = viewport.height;
		            canvasDocs.width = viewport.width;

		            // Render PDF page into canvas context
		            var renderContext = {
		                canvasContext: ctx,
		                viewport: viewport
		            };

		            page.render(renderContext);
		        });
		    });
		}
	}

	onMount(() => {
		unit_datas = window.location.href.slice(62);
		unit_datas_real = unit_datas.split("/")
		getDetailDocs();
		getDetailSign();
		// const stage = new Konva.Stage({
        //     container: 'konva-container',
        //     width: 376,
        //     height: 531
        // });

        // const layer = new Konva.Layer();

        // let rect3 = new Konva.Rect({
	    //     x: 0,
	    //     y: 0,
	    //     width: 100,
	    //     height: 100,
	    //     fill: 'blue',
	    //     cornerRadius: [0, 10, 20, 30],
	    //     draggable: true
	    //   });

        // let rect1 = new Konva.Rect({
	    //     x: 20,
	    //     y: 20,
	    //     width: 100,
	    //     height: 50,
	    //     fill: 'green',
	    //     stroke: 'black',
	    //     strokeWidth: 4,
	    //   });
	    //   // add the shape to the layer
	    //   layer.add(rect1);
	  //   let itemURL = '';
	  //   document
	  //       .getElementById('draggable-image')
	  //       .addEventListener('dragstart', function (e) {
	  //         itemURL = e.target.src;
	  //       });

	  //   let con = stage.container();
	  //   console.log(con)
	  //   con.addEventListener('dragover', function (e) {
	  //      e.preventDefault(); // !important
	  //   });

	  //   con.addEventListener('drop', function (e) {
	  //   	console.log("test")
      //   e.preventDefault();
      //   // now we need to find pointer position
      //   // we can't use stage.getPointerPosition() here, because that event
      //   // is not registered by Konva.Stage
      //   // we can register it manually:
      //   stage.setPointersPositions(e);

      //   Konva.Image.fromURL(itemURL, function (image) {
      //     layer.add(image);

      //     image.position(stage.getPointerPosition());
      //     image.draggable(true);
      //   });
      // });

         // write out drag and drop events
      // rect3.on('dragstart', function () {
      //   console.log("dragged")
      // });
      // rect3.on('dragend', function () {
      //   writeMessage('dragend');
      // });

      // layer.add(rect3);

      // // add the layer to the stage
	// 	stage.add(layer);
	})

	let attachSign = (image, id, id_sign) => {
		for (var i = 0; i < sign.length; i++) {
        if (i == id) {
            document.getElementById(`ttd_${i}`).style.borderColor = "#02C58F"
        } else {
            document.getElementById(`ttd_${i}`).style.borderColor = "#E5E5E5"
        }
    }
    	id_ttd = id_sign
		itemUrl = image
		selectSign = true
	}

	$: if(selectSign == true) {
		let img = new Image();
		img.src = itemUrl
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = function() {
			signConfig = {
				x: 50,
			    y: 50,
			    width: img.width,
			    height: img.height,
			    scaleX:0.2,
			    scaleY:0.2,
			    fillPatternImage: img,
			    draggable: true,
			    name: "ttd"
			}
		}
	}

	function handleStageMouseDown(e) {
	    const konvaEvent = e.detail;
	    stageData = konvaEvent.target.getStage()
	    // clicked on stage - clear selection
	    if (konvaEvent.target === konvaEvent.target.getStage()) {
	      selectedShapeName = "";
	      updateTransformer();
	      return;
	    }
	    // clicked on transformer - do nothing
	    const clickedOnTransformer =
	      konvaEvent.target.getParent().className === "Transformer";
	    if (clickedOnTransformer) {
	      return;
	    }

	    // find clicked rect by its name
	    const name = konvaEvent.target.name();
	    if (signConfig.name == name) {
	      selectedShapeName = name;
	      console.log(selectedShapeName);
	    } else {
	      selectedShapeName = "";
	    }

	    updateTransformer();
	  }

	  function handleTransformEnd() {
	    // find element in our state
	    const rect = rectangles.find(r => r.name === selectedShapeName);

	    // change fill
	    rect.fill = Konva.Util.getRandomColor();
	  }

	  function updateTransformer() {
	    if (!transformer) return;

	    // here we need to manually attach or detach Transformer node
	    const stage = transformer.getStage();

	    const selectedNode = stage.findOne("." + selectedShapeName);

	    // do nothing if selected node is already attached
	    if (selectedNode === transformer.node()) {
	      return;
	    }

	    if (selectedNode) {
	      // attach to another node
	      transformer.nodes([selectedNode]);
	    } else {
	      // remove transformer
	      transformer.nodes([]);
	    }
	  }

	$: if(docs) {
		docsManager(unit_datas_real[2]);
	}

	$: if(doc_set) {
		let img = new Image();
		img.src = pageView
		img.setAttribute('crossOrigin', 'anonymous');
		img.onload = function() {
			console.log(img.width)
			console.log(img.height)
			stageConfig = {
				width: img.width,
			    height: img.height,
			    scaleX:1,
			    scaleY:1,
			}
			rectangleConfig = {
			    x: 0,
			    y: 0,
			    width: img.width,
			    height: img.height,
			    scaleX:1,
			    scaleY:1,
			    fillPatternImage: img,
			  };

		}

		// document.getElementById("konva-container").style.height = window.getComputedStyle(canvasDocs).height;
		// document.getElementById("konva-container").style.width = window.getComputedStyle(canvasDocs).width;
		// // document.getElementById("konva-container").style.zIndex = "2";
		// if (kanvaDocs) {
		// 	console.log(kanvaDocs)
		// 	kanvaDocs.style.marginLeft = "-80%"
		// }
		// kanvaDocs.style.marginLeft = "-80%"
		// console.log(kanvaDocs)
		// // canvasDocs.style.zIndex = "1"
		// let w_konva = window.getComputedStyle(canvasDocs).width.slice(0,-2);
		// let h_konva = window.getComputedStyle(canvasDocs).height.slice(0,-2);
		// console.log(w_konva)
		// console.log(h_konva)
	// 	const stage = new Konva.Stage({
      //       container: 'konva-container',
      //       width: 376,
      //       height: 531
      //   });

      //   const layer = new Konva.Layer();

      //   let rect3 = new Konva.Rect({
	  //       x: 0,
	  //       y: 0,
	  //       width: 100,
	  //       height: 100,
	  //       fill: 'blue',
	  //       cornerRadius: [0, 10, 20, 30],
	  //       draggable: true
	  //     });

      //   // let rect1 = new Konva.Rect({
	  //   //     x: 20,
	  //   //     y: 20,
	  //   //     width: 100,
	  //   //     height: 50,
	  //   //     fill: 'green',
	  //   //     stroke: 'black',
	  //   //     strokeWidth: 4,
	  //   //   });
	  //   //   // add the shape to the layer
	  //   //   layer.add(rect1);
	  // //   let itemURL = '';
	  // //   document
	  // //       .getElementById('draggable-image')
	  // //       .addEventListener('dragstart', function (e) {
	  // //         itemURL = e.target.src;
	  // //       });

	  // //   let con = stage.container();
	  // //   console.log(con)
	  // //   con.addEventListener('dragover', function (e) {
	  // //      e.preventDefault(); // !important
	  // //   });

	  // //   con.addEventListener('drop', function (e) {
	  // //   	console.log("test")
      // //   e.preventDefault();
      // //   // now we need to find pointer position
      // //   // we can't use stage.getPointerPosition() here, because that event
      // //   // is not registered by Konva.Stage
      // //   // we can register it manually:
      // //   stage.setPointersPositions(e);

      // //   Konva.Image.fromURL(itemURL, function (image) {
      // //     layer.add(image);

      // //     image.position(stage.getPointerPosition());
      // //     image.draggable(true);
      // //   });
      // // });

      //    // write out drag and drop events
      // rect3.on('dragstart', function () {
      //   console.log("dragged")
      // });
      // rect3.on('dragend', function () {
      //   writeMessage('dragend');
      // });

      // layer.add(rect3);

      // // add the layer to the stage
	// 	stage.add(layer);
	}
</script>

<div class="bg-pdf-sign flex flex-between-horizontal">
	<div class="w-20"></div>
	<div class="w-60 content flex flex-direction-col flex-center-vertical flex-gap-regular">
		{#if unit_datas_real}
			<div class="title-pdf">Tipe Approval : {unit_datas_real[0]} - Halaman {unit_datas_real[2]}</div>
		{/if}
		{#if doc_set == true}
		<Stage bind:config={stageConfig} class="docs" on:mousedown={handleStageMouseDown}
  on:touchstart={handleStageMouseDown} bind:this={kanvaDocs}>
		  <Layer>
		    <Rect bind:config={rectangleConfig} />
		    {#if selectSign == true}
		    	<Rect bind:config={signConfig} />
		    	<Transformer bind:handle={transformer} />
		    {/if}
		  </Layer>
		</Stage>
		{/if}
		<div class="flex flex-direction-col flex-gap-regular">
			<div class="card w-100 flex flex-direction-col flex-gap-large">
				<div class="flex flex-center-horizontal flex-gap-regular padding-btn-ttd">
					<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small w-25" on:click={() => {
						selectSign = false;
						itemUrl = ""
						for (var i = 0; i < sign.length; i++) {
					        document.getElementById(`ttd_${i}`).style.borderColor = "#E5E5E5"
					}}}><span>Reset</span></button>
					<button class="btn-fill-primary flex flex-center-vertical flex-center-horizontal flex-gap-small w-25" on:click={() => {
						console.log(stageData.width())
						console.log(stageData.height())
						var pdf = new jsPDF('p', 'px', [stageData.width(), stageData.height()]);

						pdf.addImage(
						  stageData.toDataURL({ pixelRatio: 1 }),
						  0,
						  0,
						  stageData.width(),
						  stageData.height()
						);

						console.log(pdf.output('datauristring'))

						const formData = new FormData();
						// console.log(pdf.output('datauristring').split('base64,')[1].length)
						formData.append('id_tanda_tangan', id_ttd);
						formData.append('dokumen', pdf.output('datauristring').split('base64,')[1]);

						ApiController({
							method: "POST",
							endpoint: `approval/FRAGMENT/${frag_id}/sign`,
							datas: formData
						}).then(response => {
							console.log(response)
						})
					}}><span>Simpan</span></button>
				</div>
			</div>
			<div class="card w-100 flex flex-direction-col flex-gap-large padding-pick-ttd">
				{#if sign}
				<div class="flex flex-gap-large w-100" id="draggable-image">
					{#each sign.slice(start_paging_ttd, end_paging_ttd) as s, index}
						{#if sign.slice(start_paging_ttd, end_paging_ttd).length == 4}
						<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
							<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	{:else if sign.slice(start_paging_ttd, end_paging_ttd).length == 3}
				    	{#if index == 2}
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
				    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
			    		{:else}
			    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
				    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100" draggable="true">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	{/if}
				    	{:else if sign.slice(start_paging_ttd, end_paging_ttd).length == 2}
				    	{#if index == 1}
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
				    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100" draggable="true">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
			    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
			    		{:else}
			    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
				    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100" draggable="true">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	{/if}
				    	{:else if sign.slice(start_paging_ttd, end_paging_ttd).length == 1}
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
				    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(s.tanda_tangan, index, s.id_tanda_tangan)}}>
			    			<img src="{s.tanda_tangan}" class="w-100" draggable="true">
				    		</div>
				    		<div class="jabatan-ttd">
				    			{s.jabatan}
				    		</div>
				    		<div class="nama-ttd">
				    			{s.nama_penandatangan}
				    		</div>
				    	</div>
				    	<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
			    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
			    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
						{/if}
				    {/each}
				</div>
			    <div class="flex flex-gap-regular flex-center-vertical flex-center-horizontal">
					{#each Array(count_paging_ttd) as _, index (index+1)}
					<div class="flex flex-center-vertical flex-center-horizontal border-pagination {index+1 == pagination_counter_ttd ? 'pagination-active' : ''}" on:click={()=>{end_paging_ttd = (index+1)*4; start_paging_ttd = end_paging_ttd-4; pagination_counter_ttd = index+1; cleanSign()}}>
						<div class="text-display-sort bold-number">{index+1}</div>
					</div>
					{/each}
				</div>
				{/if}
			</div>
		</div>
	</div>
	<div class="w-20"></div>
</div>
<!-- <Stage config={{ width: 1000, height: 1000 }}>
  <Layer>
    <Rect bind:config={rectangleConfig} />
  </Layer>
</Stage> -->