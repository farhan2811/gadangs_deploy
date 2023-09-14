<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../ApiController'

	let agensiData = null
	let activeAgensi = null
	let popUpSection = ''

	let toIDR = value => {
		return new Intl.NumberFormat('id-ID', {style: 'currency', currency : "IDR"}).format(value).replace(/\,00$/, '')
	}

	let getAgensi = () => {
		ApiController({
			method:"GET",
			endpoint:'agensi'
		}).then(response => {
			agensiData = response.data.data
		})
	}

	let hapusAgensi = () => {
		ApiController({
			method:"POST",
			endpoint:`agensi/${activeAgensi}/hapus`
		}).then(response => {
			activeAgensi = null
			if(response.data.message == "Delete Agensi Success."){
				popUpSection = 'success'
				getAgensi()
			}else{
				popUpSection = 'fail'
			}
		}).catch(err => {
			console.log(err)
			popUpSection = 'fail'
		})
	}

	onMount(async () => {
		getAgensi()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Agensi" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Daftar Agensi</div>
					<div class="flex flex-gap-regular">
						<a href="/super-admin/agensi/tambah" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small" style="white-space: nowrap;">Tambah Agensi</button></a>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari Agensi" class="input-col-2 w-15 custom-border" id="filter-agensi">
					</div>
					<div class="flex flex-direction-col flex-gap-small">
						<div class="height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate bg-white custom-left-side-radius">
									<div class="text-drop-card">No</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate bg-white custom-top-bottom-border">
									<div class="text-drop-card">Nama Agensi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-direction-col flex-center-vertical w-50 border-separate-2 bg-white custom-top-bottom-border">
									<div class="flex w-100 flex-center-horizontal border-bottom-seperate">
										<div class="text-drop-card padding-spec-nup-1">Total Pendapatan Komisi</div>
									</div>
									<div class="flex w-100">
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1 ">Closing Fee</div>
										</div>
										<div class="flex flex-center-horizontal w-50 border-separate-2">
											<div class="text-drop-card padding-spec-nup-1">Down Payment</div>
										</div>
										<div class="flex flex-center-horizontal w-50">
											<div class="text-drop-card padding-spec-nup-1">Akad</div>
										</div>
									</div>
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10 border-separate bg-white custom-right-side-radius">
									<div class="text-drop-card">Aksi</div>
								</div>
							</div>
						</div>
						{#if agensiData != null}
						{#if agensiData.length > 0}
						{#each agensiData as d, i}
						<a href="/super-admin/agensi/detail-agensi/{d.id_user}" class="no-decor">
							<div class="height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-5 no-border-table bg-white custom-left-side-radius">
										<div class="text-drop-card">{i+1}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table bg-white custom-top-bottom-border">
										<div class="text-drop-card">{d.nama}</div>
									</div>
									<div class="flex flex-direction-col flex-center-vertical flex-center-horizontal w-50 bg-white custom-top-bottom-border">
										<div class="flex w-100 flex-center-vertical">
											<div class="flex flex-center-vertical w-50" style="padding: 0 16px;">
												<div class="text-drop-card padding-spec-nup-1">{toIDR(d.closing_fee)}</div>
											</div>
											<div class="flex flex-center-vertical w-50" style="padding: 0 16px;">
												<div class="text-drop-card padding-spec-nup-1">{toIDR(d.down_payment)}</div>
											</div>
											<div class="flex flex-center-vertical w-50" style="padding: 0 16px;">
												<div class="text-drop-card padding-spec-nup-1">{toIDR(d.akad)}</div>
											</div>
										</div>
									</div>
									<div class="flex flex-gap-regular flex-center-vertical flex-center-horizontal w-10 no-border-table bg-white custom-right-side-radius">
										<a href="/super-admin/agensi/edit/{d.id_user}" class="no-decor">
											<img src="/images/icons/Edit.svg" alt="">
										</a>
										<!-- svelte-ignore a11y-click-events-have-key-events -->
										<img src="/images/icons/Delete.svg" alt="" style="cursor: pointer;" on:click={(evt) => {
											evt.preventDefault()
											activeAgensi = d.id_user
											popUpSection = 'hapus-promp'
											document.getElementById('pop-up').style.display = 'flex'
										}}>
									</div>
								</div>
							</div>
						</a>
						{/each}
						{:else}
						<div class="height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal no-border-table bg-white custom-left-side-radius custom-right-side-radius" style="width: 85%;">
									<div class="text-drop-card">Tidak Ada Data</div>
								</div>
							</div>
						</div>
						{/if}
						{/if}
						<div class="card height-fit custom-border" style="width: 85%;">
							<div class="flex flex-between-horizontal">
								<div class="flex flex-gap-regular flex-center-vertical">
									<div class="text-display-sort">Menampilkan</div>
									<select class="select-sort">
										<option>10</option>
									</select>
									<div class="text-display-sort">dari <span class="bold-number">0</span> data Agensi</div>
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
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 300px">
		{#if popUpSection == 'hapus-promp'}
		<div>
			<div class="pop-up-title">Hapus Agensi</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body">Yakin ingin menghapus data Agensi?</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Batal</span>
			</button>
			<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={hapusAgensi} style="flex: 1;">
				<span>Hapus</span>
			</button> 
		</div>
		{:else}
		<div>
			<div class="pop-up-title">{popUpSection == 'success' ? 'Berhasil!' : 'Gagal'}</div>
		</div>
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-body">{popUpSection == 'success' ? 'Agensi berhasil dihapus!' : 'Agensi gagal dihapus!'}</div>
		</div>
		<div class="flex flex-gap-regular w-100">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
				document.getElementById('pop-up').style.display = 'none'
			}} style="flex: 1;">
				<span>Tutup</span>
			</button> 
		</div>
		{/if}
	</div>
</div>