<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController'
	let tab_state = 1;

	export let data
	
	let idPerumahan = data.params.slug 
	let perumahan = []
	let daftar_unit = []
	let blok = []
	let getDetailPerumahan = () => {
		ApiController({
			method: "GET",
			endpoint: `perumahan/${idPerumahan}`
		}).then(response => {
			perumahan = response.data.data.unit
			daftar_unit = perumahan.daftar_unit
			console.log(daftar_unit)
		})
	}

	let getDetailBlok = () => {
		ApiController({
			method: "GET",
			endpoint: `perumahan/${idPerumahan}/blok`
		}).then(response => {
			blok = response.data.data
			console.log(blok)
		})
	}

	onMount(() => {
		getDetailPerumahan()
		getDetailBlok();
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="KelolaPerum" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-100">
						<div class="title-content">Detail Perumahan</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Kelola Perum</div>
							<img src="/images/icons/Arrow_Right.svg">
							<div class="text-breadcrumb-active">Detail</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/nup/edit-nup" class="no-decor"><button class="btn-fill-warning flex flex-center-vertical flex-gap-small"><img src="/images/icons/Edit_White.svg"> <span>Edit</span></button></a>
						<a href="/super-admin/nup/detail-nup" class="no-decor"><button class="btn-fill-danger flex flex-center-vertical flex-gap-small"><img src="/images/icons/Trash_White.svg"> <span>Hapus</span></button></a>
					</div>
				</div>
				<div class="card w-100 flex flex-gap-semi-large">
					<div class="w-40">
						<div class="w-100 h-100 img-perum"></div>
					</div>
					<div class="w-60 flex flex-direction-col flex-gap-large">
						{#if perumahan}
							<div class="flex flex-gap-regular">
								<div class="w-50 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Nama Perumahan</div>
										<div class="content-card-detail">{perumahan.nama}</div>
									</div>
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Alamat Perumahan</div>
										<div class="content-card-detail">{perumahan.alamat}</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Provinsi</div>
											<div class="content-card-detail">{perumahan.provinsi}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Kode Pos</div>
											<div class="content-card-detail">{perumahan.kodepos}</div>
										</div>
									</div>
								</div>
								<div class="w-50 flex flex-direction-col flex-gap-regular">
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Singkatan Perumahan</div>
										<div class="content-card-detail">{perumahan.kode}</div>
									</div>
									<div class="flex flex-direction-col">
										<div class="caption-card-detail">Telepon</div>
										<div class="content-card-detail">{perumahan.telepon}</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-direction-col w-50">
											<div class="caption-card-detail">Fax</div>
											<div class="content-card-detail">{perumahan.fax}</div>
										</div>
										<div class="flex flex-direction-col">
											<div class="caption-card-detail">Site Plan</div>
											<div class="flex flex-center-vertical flex-gap-semi-small">
												<a href="#" class="no-decor link-detail-akun">Lihat Site Plan</a>
												<img src="/images/icons/External_Link.svg">
											</div>
										</div>
									</div>
								</div>
							</div>
						{/if}
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-regular">
							<span class="{tab_state == 1 ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => {tab_state = 1}}>Daftar Unit</span>
							<span class="{tab_state == 2 ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => {tab_state = 2}}>Daftar Blok</span>
						</div>
					</div>
				</div>
				{#if tab_state == 1}
				<div class="flex flex-direction-col flex-gap-regular" in:fly={{ y: -20, duration: 600 }}>
					<div class="flex">
						<div class="flex flex-gap-semi-large w-60">
							<input type="text" placeholder="Cari Kode" class="input-col-2 w-25">
							<input type="text" placeholder="Blok Rumah" class="input-col-2 w-25">
							<select class="select-col-3 w-20">
								<option selected disabled>Tipe</option>
								<option>Serpong</option>
							</select>
						</div>
						<div class="w-40 flex flex-end-horizontal">
							<a href="/super-admin/kelola-perum/detail-perumahan/{idPerumahan}/tambah-unit" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"><img src="/images/icons/Add_Plus.svg"> <span>Tambah Unit</span></button></a>
						</div>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-7 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Kode Unit</div>
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
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Lantai</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Tipe</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Harga Unit</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Pricelist</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-direction-col flex-center-horizontal flex-center-vertical w-80 border-separate-2">
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
											<div class="text-drop-card padding-spec-nup-1 ">Sisa</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 border-separate">
									<div class="text-drop-card">Progress Pembangunan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Progress Teknis</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Progress Legal</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Progress Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 border-separate">
									<div class="text-drop-card">Status</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						{#each daftar_unit as unit}
						<div class="card-head w-content-7 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">{unit.kode_unit}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">{unit.blok.blok}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">{unit.no_unit}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
									<div class="text-drop-card">{unit.lantai}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
									<div class="text-drop-card">{unit.tipe}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">{(unit.harga_unit).toLocaleString('id-ID', { style: 'currency', currency: 'IDR' })}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">{unit.pricelist	}</div>
								</div>
								<div class="flex flex-direction-col flex-center-horizontal flex-center-vertical w-80 border-separate-1">
									<div class="flex w-100 flex-center-horizontal">
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">{new Date(unit.mulai_pengerjaan.split(" ")[0].split("-")[0], unit.mulai_pengerjaan.split(" ")[0].split("-")[1], unit.mulai_pengerjaan.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1">{new Date(unit.target_pengerjaan.split(" ")[0].split("-")[0], unit.target_pengerjaan.split(" ")[0].split("-")[1], unit.target_pengerjaan.split(" ")[0].split("-")[2]).toLocaleDateString('id', {dateStyle:'medium'})}</div>
										</div>
										<div class="flex flex-center-horizontal w-31">
											<div class="text-drop-card padding-spec-nup-1 ">4 Bulan</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-50 no-border-table">
									<div class="text-approve">{unit.progress_pembangunan}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">{unit.progress_teknis}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">{unit.progress_legal}</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-drop-card">SPPKR</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-40 no-border-table">
									<div class="text-approve">Terjual</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-non-separate">
										<a href="/super-admin/kelola-perum/detail-perumahan/edit-unit" class="no-decor"><img src="/images/icons/Edit.svg"></a>
										<img src="/images/icons/Delete.svg">
									</div>
							</div>
						</div>
						{/each}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{daftar_unit.length}</span> data unit</div>
							</div>
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg"></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number">1</div></div>
								<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg"></div>
							</div>
						</div>
					</div>
				</div>
				{:else if tab_state == 2}
				<div class="w-60">
					<div class="flex flex-direction-col flex-gap-regular" in:fly={{ y: -20, duration: 600 }}>
						<div class="flex">
							<div class="flex flex-gap-semi-large w-70">
								<input type="text" placeholder="Cari Blok" class="input-col-2 w-50">
							</div>
							<div class="w-40 flex flex-end-horizontal">
								<a href="/super-admin/kelola-perum/detail-perumahan/{idPerumahan}/tambah-blok" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"><img src="/images/icons/Add_Plus.svg"> <span>Tambah Blok</span></button></a>
							</div>
						</div>
						<div class="scroll-x flex flex-direction-col flex-gap-regular">
							<div class="card-head w-100 height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
										<div class="text-drop-card">Blok</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-60 border-separate">
										<div class="text-drop-card">Alamat</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 border-non-separate">
										<div class="text-drop-card">Aksi</div>
										<img src="/images/icons/Arrow.svg">
									</div>
								</div>
							</div>
							{#each blok as unit_blok}
							<div class="card-head w-100 height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{unit_blok.blok}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-60 no-border-table">
										<div class="text-drop-card">{unit_blok.alamat}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 border-non-separate">
											<a href="/super-admin/kelola-perum/detail-perumahan/edit-blok" class="no-decor"><img src="/images/icons/Edit.svg"></a>
											<img src="/images/icons/Delete.svg">
										</div>
								</div>
							</div>
							{/each}
						</div>
						<div class="card w-100 height-fit">
							<div class="flex flex-between-horizontal">
								<div class="flex flex-gap-regular flex-center-vertical">
									<div class="text-display-sort">Menampilkan</div>
									<select class="select-sort">
										<option>10</option>
									</select>
									<div class="text-display-sort">dari <span class="bold-number">{daftar_unit.length}</span> data unit</div>
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
			{/if}
			</div>
		</div>
	</div>
</div>