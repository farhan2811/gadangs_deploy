<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte'
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	
	import ApiController from '../../../../ApiController'
	
	let perumahanList = []
	let filterPerumahanByNama = []
	let keywordKode = ''
	let getPerumahanList = () => {
		ApiController({
			method: "GET",
			endpoint: `perumahan`
		}).then(response => {
			perumahanList = response.data.data
			console.log(perumahanList)
		})
	}

	function filterByKode() {
		filterPerumahanByNama = perumahanList.filter((item) => {
			return item.kode.toLowerCase().includes(keywordKode.toLowerCase())
		})
	}

	onMount(() => {
		getPerumahanList()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="KelolaPerum" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Perumahan</div>
					<div class="flex flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small" on:click={() => window.location.href = '/v1/super-admin/kelola-perum/kelola-pricelist'}><span>Kelola Pricelist</span></button>
						<a href="/v1/super-admin/kelola-perum/tambah-perumahan" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"><img src="/images/icons/Add_Plus.svg"> <span>Tambah Perumahan</span></button></a>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Kode" class="input-col-2 w-15" bind:value={keywordKode} on:input={filterByKode} />
						<input type="text" placeholder="Cari Perum" class="input-col-2 w-15">
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content-7 height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Kode</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Nama Perum</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-separate">
									<div class="text-drop-card">Singkatan</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Alamat</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Provinsi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Kode Pos</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Telepon</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Fax</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Jumlah Head Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Jumlah Marketing</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Jumlah Blok</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">Jumlah Unit</div>
									<img src="/images/icons/Arrow.svg">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg">
								</div>
							</div>
						</div>
						{#each perumahanList as perumahan}
						<a href="/v1/super-admin/kelola-perum/detail-perumahan/{perumahan.id_perumahan}" class="no-decor">
							<div class="card-head w-content-7 height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">{perumahan.kode}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{perumahan.nama}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
										<div class="text-drop-card">{perumahan.kode}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
										<div class="text-drop-card">{perumahan.alamat}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.provinsi}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.kodepos}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.telepon}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.fax}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{perumahan.jumlah_head_marketing}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{perumahan.jumlah_marketing}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.jumlah_blok}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{perumahan.jumlah_unit}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
										<a href="/v1/super-admin/kelola-perum/edit-perumahan/{perumahan.id_perumahan}">
											<img src="/images/icons/Edit.svg" />
										</a>
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
						</a>
						{/each}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{perumahanList.length}</span> data </div>
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