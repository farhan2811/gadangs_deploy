<script type="text/javascript">
	import Sidebar from '../../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../../components/navbar.svelte'
	import { onMount, beforeUpdate } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../../ApiController';
	import Carousel from 'svelte-carousel'
	import { browser } from '$app/environment';

	let sign = null
	let docs = null;
	let canvasDocs;
	let signCanvases = {};
	let carousel;
	let start_paging_ttd = 0;
	let end_paging_ttd = 4;
	let count_paging_ttd = 0;
	let temp_holder_ttd;
	let pagination_counter_ttd = 1;
	let pagination_counter_docs = 1;
	let sign_selected = 0;
	let docsIdentifierTemp;
	let docsIdentifierReal;
	let docsViewer;
	let docsViewer2;
	let canvasDocs2;
	let numPagesDocs;
	let ttdImage;
	let selectedSignId;
	let selectedSignImage;
	let signCanvas2;
	let signCtx2;
	let ctx;
	let pdfDoc = null;
	let signatureImage = null;
	let unit_datas;
	let unit_datas_real;
	let numberPage;

	let getDetailSign = () => {
		ApiController({
			method: "GET",
			endpoint: `sign`
		}).then(response => {
			sign = response.data.data
			console.log(sign.length)
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

	let getDetailDocs = () => {
		docsIdentifierTemp = window.location.href.slice(62);
		docsIdentifierReal = docsIdentifierTemp.split("/")
		ApiController({
			method: "GET",
			endpoint: `approval/${docsIdentifierReal[0]}/${docsIdentifierReal[1]}/detail`
		}).then(response => {
			docs = response.data.data.berkas[0]
			console.log(docs)
			numPagesDocs = docs.fragment_surat.length;
		})
	}
	// docsViewer = pdfjsLib.getDocument(docs.berkas.dokumen)
	// console.log(docsViewer)

		let docsManager = (page) => {
			numberPage = page
			if (docs.type == "SPA") {
				docsViewer = pdfjsLib.getDocument(docs.fragment_surat[page-1].dokumen).promise;
			    docsViewer.then((pdf) => {
			        pdf.getPage(1).then(function (page) {
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




	onMount(async() => {
		// idUnitReal = idUnitTemp.replace(/\D/g, "");
		// getDataApproval();
		// getDetailSign();
		getDetailDocs();
		unit_datas = window.location.href.slice(62);
		unit_datas_real = unit_datas.split("/")
		console.log(unit_datas_real)
	})

	$: if(docs) {
		docsManager(1);
	}
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Approval" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-50">
						<div class="title-content" id="detail-app">Detail Approval</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Approval</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<button class="btn-fill-danger flex flex-center-vertical flex-gap-small" on:click={() => {
							ApiController({
								method: "POST",
								endpoint: `approval/${unit_datas_real[0]}/${unit_datas_real[1]}/reject`
							}).then(response => {
								console.log(response)
							})
						}}><span>Reject</span></button>
						<button class="btn-fill-primary flex flex-center-vertical flex-gap-small" on:click={() => {
							ApiController({
								method: "POST",
								endpoint: `approval/${unit_datas_real[0]}/${unit_datas_real[1]}/approve`
							}).then(response => {
								console.log(response)
							})
						}}> <span>Simpan dan Approve</span></button>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-large w-100">
					<div class="flex flex-gap-large">
						<div class="card w-100 flex flex-direction-col flex-gap-large">
							<div class="flex flex-direction-col flex-gap-small">
								<div class="title-canvas text-center">Canvas Surat</div>
								<!-- <div class="desc-canvas text-center">Pilih tanda tangan, lalu tahan dan arahkan ke surat. Atur posisi tanda tangan hingga sesuai</div> -->
								<div class="desc-canvas text-center">Silahkan tekan tombol "Ke Halaman Tanda Tangan" dibawah untuk menandatangani dokumen</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical flex-center-horizontal">
								{#if numPagesDocs}
									{#each Array(numPagesDocs) as _, index (index+1)}
									<div class="flex flex-center-vertical flex-center-horizontal border-pagination {index+1 == pagination_counter_docs ? 'pagination-active' : ''}" on:click={()=>{pagination_counter_docs = index+1; docsManager(pagination_counter_docs)}}>
										<div class="text-display-sort bold-number">{index+1}</div>
									</div>
									{/each}
								{/if}
							</div>
							<div class="flex flex-center-horizontal w-100" id="test-ttd">
								<canvas class="docs w-80" bind:this={canvasDocs}></canvas>
							</div>
							{#if docs}
								<div class="flex flex-center-horizontal flex-gap-regular padding-btn-ttd">
									<a href="/v1/super-admin/approval/detail-approval/{unit_datas_real[0]}/{unit_datas_real[1]}/{docs.fragment_surat[numberPage-1].id_fragment_surat}" class="no-decor"><button class="btn-fill-primary flex flex-center-vertical flex-center-horizontal flex-gap-small"> <span>Ke Halaman Tanda Tangan</span></button></a>
								</div>
							{/if}
						</div>
					</div>
					<!-- <div class="flex flex-gap-large">
						<div class="card w-100 flex flex-direction-col flex-gap-large padding-pick-ttd">
							{#if sign}
							<div class="flex flex-gap-large w-100">
								{#each sign.slice(start_paging_ttd, end_paging_ttd) as s, index}
									{#if sign.slice(start_paging_ttd, end_paging_ttd).length == 4}
									<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
										<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
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
							    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
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
							    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
						    			<img src="{s.tanda_tangan}" class="w-100">
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
							    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
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
						    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25"><div class="card-ttd"></div></div>
						    		{:else}
						    		<div class="padding-items-carousel-ttd flex flex-direction-col flex-gap-small w-25">
							    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
						    			<img src="{s.tanda_tangan}" class="w-100">
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
							    		<div class="card-ttd" style="border: 1px solid #E5E5E5;" id="ttd_{index}" on:click={() => {attachSign(index, s.tanda_tangan)}}>
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
					</div> -->
				</div>
			</div>
		</div>
	</div>
</div>