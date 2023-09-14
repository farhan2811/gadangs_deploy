<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../ApiController';

	let overflow = null;
	let dataUnit = [];


	function isOverflowY(element) {
	  return element.scrollHeight != Math.max(element.offsetHeight, element.clientHeight)
	}

	let getDataUnit = () => {
		ApiController({
			method: "GET",
			endpoint: `legal/unit`
		}).then(response => {
			dataUnit = response.data.data
			console.log(dataUnit)
		})
	}

	onMount(() => {
		window.$(":checkbox").on("click", false);
		getDataUnit();
		console.log(document.getElementById("content"))
		overflow = isOverflowY(document.getElementById("content"))
		console.log(overflow)
	})
	
</script>

<div id="after-login-layout" class="h-100">
	<div class="flex {overflow == true ? "h-100" : "h-fit"}" id="content">
		<Sidebar statusPointer="Unit" pagePointer="legal"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Unit</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small"><span>Download Data Unit</span> <img src="/images/icons/File_Download.svg"></button>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex">
						<select class="select-col-2 w-25">
							<option disabled selected>Semua Perum</option>
							<option>Epicentrum Sepatan</option>
							<option>Serpong</option>
						</select>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Kode" class="input-col-2 w-15">
						<select class="select-col-3 w-15">
							<option disabled selected>Status</option>
							<option>Sudah akad</option>
							<option>Belum akad</option>
						</select>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-2 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Kode Unit</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Perum</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Blok</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Tipe</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Waktu Pembangunan</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Mulai</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Target</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Selesai</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-30 border-separate">
									<div class="text-drop-card">Progress Pembangunan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-50 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Pengesahan</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-100">
											<div class="text-drop-card padding-spec-nup-1 ">Siteplan</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-100 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Sertifikat</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Induk</div>
										</div>
										<div class="flex flex-center-horizontal w-31 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">SPS</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">Splitzing</div>
										</div>
									</div>
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-70 border-separate-2">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">IMB/PBG</div>
									</div>
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Induk</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1">Splitzing</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-non-separate">
									<div class="text-drop-card">Unit Akad</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						{#if dataUnit}
							{#each dataUnit as data, index}
							<a href="/legal/unit/detail-unit/{data.informasi_unit.id_unit}" class="no-decor">
								<div class="card-head w-content-2 height-fit">
									<div class="flex">
										<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
											<div class="text-drop-card">{data.informasi_unit.id_unit}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<div class="text-drop-card">{data.informasi_unit.perumahan.kode}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											{#if data.informasi_unit.blok == null}
												-
											{:else}
												<div class="text-drop-card">{data.informasi_unit.blok.blok}</div>
											{/if}
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<div class="text-drop-card">{data.informasi_unit.no_rumah}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
											<div class="text-drop-card">{data.informasi_unit.tipe}</div>
										</div>
										<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-100">
											<div class="flex w-100 flex-center-horizontal flex-center-vertical">
												<div class="flex flex-center-horizontal w-31">
													<div class="text-drop-card padding-spec-nup-1 ">{data.informasi_unit.mulai_pengerjaan}</div>
												</div>
												<div class="flex flex-center-horizontal w-31">
													<div class="text-drop-card padding-spec-nup-1">{data.informasi_unit.target_pengerjaan}</div>
												</div>
												<div class="flex flex-center-horizontal w-31">
													<div class="text-drop-card padding-spec-nup-1 ">{data.informasi_unit.selesai_pengerjaan}</div>
												</div>
											</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-30 no-border-table">
											{#if data.informasi_unit.progress_pembangunan == 100}
												<div class="text-approve">100%</div>
											{:else}
												<div class="text-reject">{data.informasi_unit.progress_pembangunan}%</div>
											{/if}
											
										</div>
										{#if data.progress_legal.length == 0}
											<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-100">
														<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
													</div>
												</div>
											</div>
											<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-31">
														<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
													</div>
													<div class="flex flex-center-horizontal w-31">
														<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
													</div>
													<div class="flex flex-center-horizontal w-31">
														<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
													</div>
												</div>
											</div>
											<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-50">
														<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
													</div>
													<div class="flex flex-center-horizontal w-50">
														<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
													</div>
												</div>
											</div>
										{:else}
											<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-100">
														{#if data.progress_legal[0].detail[0].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
														{/if}
													</div>
												</div>
											</div>
											<div class="flex flex-direction-col flex-center-vertical w-100 flex-center-horizontal">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-31">
														{#if data.progress_legal[1].detail[0].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
														{/if}
													</div>
													<div class="flex flex-center-horizontal w-31">
														{#if data.progress_legal[1].detail[1].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
														{/if}
													</div>
													<div class="flex flex-center-horizontal w-31">
														{#if data.progress_legal[1].detail[2].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
														{/if}
													</div>
												</div>
											</div>
											<div class="flex flex-direction-col flex-center-vertical w-70 flex-center-horizontal">
												<div class="flex w-100 flex-center-horizontal">
													<div class="flex flex-center-horizontal w-50">
														{#if data.progress_legal[2].detail[0].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															{#if data.progress_legal[2].detail[1].progress == true}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name="" checked></div>
														{:else}
															<div class="text-drop-card padding-spec-nup-1 "><input type="checkbox" name=""></div>
														{/if}
														{/if}
													</div>
													<div class="flex flex-center-horizontal w-50">
														<div class="text-drop-card padding-spec-nup-1"><input type="checkbox" name=""></div>
													</div>
												</div>
											</div>
										{/if}
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											{#if data.informasi_unit.unit_akad == 'pending'}
												<div class="text-pending">Pending</div>
											{:else if data.informasi_unit.unit_akad == 'approved'}
												<div class="text-approve">Ready</div>
											{:else}
												<div class="text-reject">Belum Ready</div>
											{/if}										
										</div>
									</div>
								</div>
							</a>
							{/each}
						{/if}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{dataUnit.length}</span> data Unit</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg"></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>