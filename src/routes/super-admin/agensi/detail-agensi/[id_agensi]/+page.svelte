<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte';
	import Navbar from '../../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController';
	import toDate from '../../../../../CustomTime';

	export let data

	let detailAgensi = null

	let getDetail = () => {
		ApiController({
			method:"GET",
			endpoint: `agensi/${data.params.id_agensi}`
		}).then(response => {
			detailAgensi = response.data.data
		})
	}

	let toIDR = value => {
		return new Intl.NumberFormat('id-ID', {style: 'currency', currency : "IDR"}).format(value).replace(/\,00$/, '')
	}

	onMount(async () => {
		getDetail()
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Agensi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail Agensi</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Agensi</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/agensi/edit/{data.params.id_agensi}" class="no-decor">
							<button class="btn-fill-warning flex flex-center-vertical flex-gap-small">
								<img src="/images/icons/Edit_White.svg" alt=""> 
								<span>Edit</span>
							</button>
						</a> 
						<button class="btn-fill-danger flex flex-center-vertical flex-gap-small">
							<img src="/images/icons/Trash_White.svg" alt=""> 
							<span>Hapus</span>
						</button>
					</div>
				</div>
				<div class="flex w-100 flex-gap-regular">
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col custom-border">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Informasi Agensi</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Nama Agensi</div> 
											<div class="content-card-detail">{detailAgensi == null ? '' : detailAgensi.informasi_agensi.nama}</div>
										</div>
										<div class="custom-inner-card">
											<div class="caption-card-detail">Informasi Bank</div> 
											<div class="flex flex-gap-regular w-100">
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Nama Bank</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : detailAgensi.informasi_agensi.nama_bank}</div>
												</div>
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">No. Rekening</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : detailAgensi.informasi_agensi.no_rekening}</div>
												</div>
											</div>
											<div class="flex flex-gap-regular w-100">
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Nama di Rekening Bank</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : detailAgensi.informasi_agensi.nama_rekening}</div>
												</div>
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Cabang Bank</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : detailAgensi.informasi_agensi.cabang_bank}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="w-50 padding-item-solo">
						<div class="card flex flex-gap-semi-large flex-direction-col custom-border">
							<div class="w-100 flex flex-direction-col flex-gap-large">
								<div class="flex flex-gap-regular">
									<div class="w-100 flex flex-direction-col flex-gap-regular">
										<div class="flex flex-center-vertical flex-between-horizontal">
											<div class="secondary-title-card-detail">Pendapatan Komisi</div>
										</div>
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Total Pendapatan</div> 
											<div class="content-card-detail">{detailAgensi == null ? '' : toIDR(detailAgensi.pendapatan_komisi.total_pendapatan)}</div>
										</div>
										<div class="custom-inner-card">
											<div class="caption-card-detail">Detail Pendapatan</div> 
											<div class="flex flex-gap-regular w-100">
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Closing Fee</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : toIDR(detailAgensi.pendapatan_komisi.detail.total_closing_fee)}</div>
												</div>
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Down Payment</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : toIDR(detailAgensi.pendapatan_komisi.detail.total_down_payment)}</div>
												</div>
											</div>
											<div class="flex flex-gap-regular w-100">
												<div class="flex flex-direction-col w-50">
													<div class="caption-card-detail">Akad</div> 
													<div class="content-card-detail">{detailAgensi == null ? '' : toIDR(detailAgensi.pendapatan_komisi.detail.total_akad)}</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="title-content">Riwayat Komisi Masuk</div>
				<div class="flex flex-direction-col flex-gap-small">
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari NUP" class="input-col-2 w-15 custom-border" id="filter-nup">
						<div class="flex flex-gap-semi-large w-100">
							<select class="select-col-3 w-20 custom-border">
								<option hidden selected value="">Jenis Komisi</option>
								<option>Closing Fee</option>
								<option>Down Payment</option>
								<option>Akad</option>
							</select>
						</div>
					</div>
					<div class="height-fit">
						<div class="flex">
							<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 border-separate bg-white custom-left-side-radius">
								<div class="text-drop-card">No</div>
								<img src="/images/icons/Arrow.svg" alt="">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-10 border-separate bg-white custom-top-bottom-border">
								<div class="text-drop-card">NUP</div>
								<img src="/images/icons/Arrow.svg" alt="">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-15 border-separate bg-white custom-top-bottom-border">
								<div class="text-drop-card">Jenis Komisi</div>
								<img src="/images/icons/Arrow.svg" alt="">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-15 border-separate bg-white custom-top-bottom-border">
								<div class="text-drop-card">Nominal Komisi</div>
								<img src="/images/icons/Arrow.svg" alt="">
							</div>
							<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 border-separate bg-white custom-right-side-radius">
								<div class="text-drop-card">Tanggal</div>
								<img src="/images/icons/Arrow.svg" alt="">
							</div>
						</div>
					</div>
					{#if detailAgensi != null}
					{#if detailAgensi.riwayat_komisi.length > 0}
					{#each detailAgensi.riwayat_komisi as d, i}
					<div class="height-fit">
						<div class="flex">
							<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table bg-white custom-left-side-radius">
								<div class="text-drop-card">{i+1}</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table bg-white custom-top-bottom-border">
								<div class="text-drop-card">{d.nup}</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table bg-white custom-top-bottom-border">
								<div class="text-drop-card">{d.jenis_komisi}</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table bg-white custom-top-bottom-border">
								<div class="text-drop-card">{toIDR(d.nominal)}</div>
							</div>
							<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 no-border-table bg-white custom-right-side-radius">
								<div class="text-drop-card">{toDate(d.tanggal)}</div>
							</div>
						</div>
					</div>
					{/each}
					{:else}
					<div class="height-fit">
						<div class="flex">
							<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal no-border-table bg-white custom-left-side-radius" style="width: 55%;">
								<div class="text-drop-card">Belum ada Data</div>
							</div>
						</div>
					</div>
					{/if}
					{/if}
					<div class="card height-fit custom-border" style="width: 55%;">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{detailAgensi != null ? detailAgensi.riwayat_komisi.length : ''}</span> data Riwayat</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg" alt=""></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number" alt="">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg" alt=""></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>