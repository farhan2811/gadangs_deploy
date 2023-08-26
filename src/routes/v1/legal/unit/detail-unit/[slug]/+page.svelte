<script type="text/javascript">
	import Sidebar from '../../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../../components/navbar.svelte'
	import { onMount, afterUpdate } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../../ApiController';

	export let data

	let informasiUnit = null
	let progressUnit = null
	let completeData = null;
	let progressDrop = 1
	let progressBar;

	let getDetailData = () => {
		ApiController({
			method: 'GET',
			endpoint: `legal/unit/${data.params.slug}`
		}).then(response => {
			completeData = response.data.data
			informasiUnit = response.data.data.informasi_unit
			progressUnit = response.data.data.progress
			console.log(progressUnit)
			console.log(informasiUnit)
			console.log(response.data.data)
		})
	}
	
	onMount(async () => {
		getDetailData()
		window.$(":checkbox").on("click", false);
	})

	$: if(progressBar) {
		progressBar.style.width = `${completeData.progress_bar}%`
		if (completeData.progress_bar == 0) {
			progressBar.style.background = "transparent"
			progressBar.style.paddingLeft = "20px"
			progressBar.style.color = "#FF5963"
		}
	}

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Unit" pagePointer="legal"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail Unit</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Data Unit</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-large w-100">
					{#if informasiUnit}
					<div class="card w-90 flex flex-direction-col flex-gap-large">
						<div class="flex w-100 flex-gap-semi-large">
							<div class="w-50">
								<img class="img-detail w-100 h-100" src="/images/rumah.png">
							</div>
							<div class="w-50 flex flex-direction-col flex-gap-large">
								<div class="flex flex-between-horizontal flex-center-vertical">
									<div class="w-50 flex flex-direction-col flex-gap-small">
										<div class="main-title-card-detail">Informasi Unit</div>
									</div>
									<div class="w-50 flex flex-gap-regular flex-end-horizontal">
										<div class="{informasiUnit.progress_pembangunan < 100 ? 'label-danger' : 'label-success'} flex flex-center-horizontal flex-gap-small">
											<span>{informasiUnit.progress_pembangunan} %</span>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-gap-semi-large">
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Unit Akad</div>
											{#if informasiUnit.unit_akad == 'pending'}
												<div class="content-card-detail-pending">Pending</div>
											{:else if  informasiUnit.unit_akad == 'approved'}
												<div class="content-card-detail-success">Approved</div>
											{:else}
												<div class="content-card-detail-danger">Rejected</div>
											{/if}
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Tanggal Akad</div>
											<div class="content-card-detail">{informasiUnit.tanggal_akad}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">No SPK</div>
											<div class="content-card-detail">{informasiUnit.no_spk}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Target SPK</div>
											<div class="content-card-detail">{informasiUnit.target_spk}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Subkon/Mandor</div>
											<div class="content-card-detail">{informasiUnit.mandor.nama}</div>
										</div>
									</div>
									<div class="w-100 flex flex-gap-regular">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Perum</div>
											<div class="content-card-detail">{informasiUnit.perumahan.nama}</div>
										</div>
									</div>
									<div class="w-100 flex flex-between-horizontal">
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Blok</div>
											<div class="content-card-detail">{informasiUnit.blok.blok}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">No. Rumah</div>
											<div class="content-card-detail">{informasiUnit.no_rumah}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Unit</div>
											<div class="content-card-detail">{informasiUnit.unit}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Lantai</div>
											<div class="content-card-detail">{informasiUnit.lantai}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Type</div>
											<div class="content-card-detail">{informasiUnit.tipe}</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div class="flex w-100 flex-direction-col flex-gap-semi-large">
							<div class="w-100 flex">
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Mulai Pembangunan</div>
									<div class="content-card-detail">{informasiUnit.mulai_pengerjaan}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Target Selesai</div>
									<div class="content-card-detail">{informasiUnit.target_pengerjaan}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Sisa Waktu</div>
									<div class="content-card-detail">{informasiUnit.sisa_waktu} hari</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Selesai Pembangunan</div>
									<div class="content-card-detail">{informasiUnit.selesai_pengerjaan}</div>
								</div>
							</div>
							<div class="w-100 flex">
								<div class="flex flex-direction-col flex-gap-small w-100">
									<div class="caption-card-detail">Keterangan</div>
									<div class="caption-card-detail">{informasiUnit.keterangan}</div>
								</div>
							</div>
							<div class="w-100 flex">
								<div class="flex flex-direction-col w-20">
									<div class="caption-card-detail">Stok Unit</div>
									<div class="content-card-detail-success">Ready</div>
								</div>
								<div class="flex flex-direction-col w-30">
									<div class="caption-card-detail">Harga Unit</div>
									<div class="content-card-detail">Rp. {informasiUnit.harga_unit}</div>
								</div>
								<div class="flex flex-direction-col w-25">
									<div class="caption-card-detail">Versi Price List</div>
									<div class="content-card-detail">{informasiUnit.pricelist.versi_pricelist}</div>
								</div>
							</div>
						</div>
					</div>
					{/if}
					{#if progressUnit && completeData}
						<div class="card w-100 flex flex-gap-semi-large flex-direction-col">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="w-100 flex flex-direction-col flex-gap-semi-small">
											<div class="flex flex-center-vertical flex-between-horizontal">
												<div class="secondary-title-card-detail">Checklist Progress</div>
												<div class="flex flex-gap-small flex-center-vertical">
													<a href="/v1/legal/unit/detail-unit/{data.params.slug}/atur-progress" class="btn-outline-set no-decor">Atur</a>
													{#if progressDrop == 0}
														<img src="/images/icons/Caret_Down_MD.svg" class="pointer" on:click={() => {
															progressDrop = 1;
														}}>
													{:else}
														<img src="/images/icons/Caret_Up_MD.svg" class="pointer" on:click={() => {
															progressDrop = 0;
														}}>
													{/if}
												</div>
											</div>
											<div class="flex w-100">
												<div class="loading-bar w-100">
													<div class="{completeData.progress_bar < 100 ? "loading-danger" : "loading-success" } flex flex-center-horizontal" bind:this={progressBar} id="progressBar">{Number(completeData.progress_bar).toFixed(1)}%</div>
												</div>
											</div>
										</div>
										{#if progressDrop == 1}
											{#if progressUnit.length == 0}
												<div class="item-progress flex flex-direction-col">
													<div class="flex w-100 flex-center-vertical">
														<div class="title-progress w-20">Nama Progress</div>
														<div class="title-progress flex flex-center-horizontal w-10">Mulai</div>
														<div class="title-progress flex flex-center-horizontal w-10">Target</div>
														<div class="title-progress flex flex-center-horizontal w-10">Sisa</div>
														<div class="title-progress flex flex-center-horizontal w-10">Selesai</div>
														<div class="title-progress flex flex-center-horizontal w-10">Progress</div>
														<div class="title-progress w-30">Keterangan</div>
													</div>
													<div class="flex flex-direction-col border-item-legal">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-100">
																<div class="accent-title-progress">
																	Pengesahan - <span class="accent-title-reject">0%</span>
																</div>
															</div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Siteplan</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
															</div>
															<div class="title-progress w-30">
															</div>
														</div>
													</div>
													<div class="flex flex-direction-col border-item-legal">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-100">
																<div class="accent-title-progress">
																	Sertifikat - <span class="accent-title-reject">0%</span>
																</div>
															</div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Induk</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																<!-- {#if progressUnit[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if} -->
															</div>
															<div class="title-progress w-30"></div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">SPS</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
															</div>
															<div class="title-progress w-30"></div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Splitzing</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																<!-- {#if progressUnit[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if} -->
															</div>
															<div class="title-progress w-30"></div>
														</div>
													</div>
													<div class="flex flex-direction-col border-item-legal">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-100">
																<div class="accent-title-progress">
																	IMB/PBG - <span class="accent-title-reject">0%</span>
																</div>
															</div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Induk</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																<!-- {#if progressUnit[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if} -->
															</div>
															<div class="title-progress w-30"></div>
														</div>
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Splitzing</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10"></div>
															<div class="title-progress flex flex-center-horizontal w-10">
																<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																<!-- {#if progressUnit[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if} -->
															</div>
															<div class="title-progress w-30"></div>
														</div>
													</div>
												</div>
											{:else}
												<div class="item-progress flex flex-direction-col">
													<div class="flex w-100 flex-center-vertical">
														<div class="title-progress w-20">Nama Progress</div>
														<div class="title-progress flex flex-center-horizontal w-10">Mulai</div>
														<div class="title-progress flex flex-center-horizontal w-10">Target</div>
														<div class="title-progress flex flex-center-horizontal w-10">Sisa</div>
														<div class="title-progress flex flex-center-horizontal w-10">Selesai</div>
														<div class="title-progress flex flex-center-horizontal w-10">Progress</div>
														<div class="title-progress w-30">Keterangan</div>
													</div>
														<div class="flex flex-direction-col border-item-legal">
															<div class="flex w-100 flex-center-vertical">
																<div class="w-100">
																	<div class="accent-title-progress">
																		{#if progressUnit[0].detail_progress_bar == 100}
																			Pengesahan - <span class="accent-title-success">{Number(progressUnit[0].detail_progress_bar.toFixed(1))}%</span>
																		{:else}
																		Pengesahan - <span class="accent-title-reject">{Number(progressUnit[0].detail_progress_bar.toFixed(1))}%</span>
																		{/if}
																	</div>
																</div>
															</div>
															<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[0].detail[0].id_progresses_detail}" class="no-decor">
															<div class="flex w-100 flex-center-vertical">
																<div class="w-20">
																	<div class="name-progress">Siteplan</div>
																</div>
																<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[0].detail[0].tanggal_mulai}</div>
																<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[0].detail[0].tanggal_target}</div>
																<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[0].detail[0].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[0].detail[0].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)}  Hari</div>
																<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[0].detail[0].tanggal_selesai}</div>
																<div class="title-progress flex flex-center-horizontal w-10">
																	{#if progressUnit[0].detail[0].progress == true}
																		<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																	{:else}
																		<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																	{/if}
																</div>
																<div class="title-progress w-30">{progressUnit[0].detail[0].keterangan}
																</div>
															</div>
															</a>
														</div>
													<div class="flex flex-direction-col border-item-legal">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-100">
																<div class="accent-title-progress">
																	{#if progressUnit[1].detail_progress_bar == 100}
																		Sertifikat - <span class="accent-title-success">{Number(progressUnit[1].detail_progress_bar.toFixed(1))}%</span>
																	{:else}
																	Sertifikat - <span class="accent-title-reject">{Number(progressUnit[1].detail_progress_bar.toFixed(1))}%</span>
																	{/if}
																</div>
															</div>
														</div>
														<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[1].detail[0].id_progresses_detail}" class="no-decor">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Induk</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[0].tanggal_mulai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[0].tanggal_target}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[1].detail[0].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[1].detail[0].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)} Hari</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[0].tanggal_selesai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">
																{#if progressUnit[1].detail[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if}
															</div>
															<div class="title-progress w-30">{progressUnit[1].detail[0].keterangan}
															</div>
														</div>
														</a>
														<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[1].detail[1].id_progresses_detail}" class="no-decor">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">SPS</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[1].tanggal_mulai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[1].tanggal_target}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[1].detail[1].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[1].detail[1].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)}  Hari</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[1].tanggal_selesai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">
																{#if progressUnit[1].detail[1].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if}
															</div>
															<div class="title-progress w-30">{progressUnit[1].detail[1].keterangan}
															</div>
														</div>
														</a>
														<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[1].detail[2].id_progresses_detail}" class="no-decor">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Splitzing</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[2].tanggal_mulai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[2].tanggal_target}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[1].detail[2].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[1].detail[2].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)}  Hari</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[1].detail[2].tanggal_selesai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">
																{#if progressUnit[1].detail[2].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if}
															</div>
															<div class="title-progress w-30">{progressUnit[1].detail[2].keterangan}
															</div>
														</div>
														</a>
													</div>
													<div class="flex flex-direction-col border-item-legal">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-100">
																<div class="accent-title-progress">
																	{#if progressUnit[2].detail_progress_bar == 100}
																		IMB/PBG - <span class="accent-title-success">{Number(progressUnit[2].detail_progress_bar.toFixed(1))}%</span>
																	{:else}
																	IMB/PBG - <span class="accent-title-reject">{Number(progressUnit[2].detail_progress_bar.toFixed(1))}%</span>
																	{/if}
																</div>
															</div>
														</div>
														<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[2].detail[0].id_progresses_detail}" class="no-decor">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Induk</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[0].tanggal_mulai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[0].tanggal_target}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[2].detail[0].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[2].detail[0].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)}  Hari</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[0].tanggal_selesai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">
																{#if progressUnit[2].detail[0].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if}
															</div>
															<div class="title-progress w-30">{progressUnit[2].detail[0].keterangan}
															</div>
														</div>
														</a>
														<a href="/v1/legal/unit/detail-unit/{progressUnit[0].id_progresses}/atur-progress-selected/{progressUnit[2].detail[1].id_progresses_detail}" class="no-decor">
														<div class="flex w-100 flex-center-vertical">
															<div class="w-20">
																<div class="name-progress">Splitzing</div>
															</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[1].tanggal_mulai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[1].tanggal_target}</div>
															<div class="title-progress flex flex-center-horizontal w-10">{(moment(progressUnit[2].detail[1].tanggal_target, "DD/MM/YYYY").toDate() - moment(progressUnit[2].detail[1].tanggal_mulai, "DD/MM/YYYY").toDate())/(1000*3600*24)}  Hari</div>
															<div class="title-progress flex flex-center-horizontal w-10">{progressUnit[2].detail[1].tanggal_selesai}</div>
															<div class="title-progress flex flex-center-horizontal w-10">
																{#if progressUnit[2].detail[1].progress == true}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name="" checked></div>
																{:else}
																	<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
																{/if}
															</div>
															<div class="title-progress w-30">{progressUnit[2].detail[1].keterangan}
															</div>
														</div>
														</a>
													</div>
												</div>
											{/if}
										{/if}
									</div>
								</div>
							</div>
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>