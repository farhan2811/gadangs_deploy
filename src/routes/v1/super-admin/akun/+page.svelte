<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte'
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../ApiController';
	import toDate from '../../../../CustomTime'

	let realAkunData = null
	let akunData = null
	let activeTab = "Semua"
	let roleData = null

	let getRole = () => {
		ApiController({
			method:"GET",
			endpoint:'role'
		}).then(response => {
			roleData = response.data.data
		})
	}

	let getAkun = () => {
		ApiController({
			method:"GET",
			endpoint:'account'
		}).then(response => {
			realAkunData = response.data.data.sort((a, b) => a.id_user - b.id_user)
			akunData = realAkunData
			changeTab(activeTab)
		})
	}

	let changeTab = tab => {
		activeTab = tab
		akunData = realAkunData

		filterData()
	}

	let changeAccountStatus = (data) => {
		let endpoint = ''

		if(data.status_akun == 'active'){
			endpoint = `account/${data.id_user}/shutdown`
		}else{
			endpoint = `account/${data.id_user}/activate`
		}

		ApiController({
			method:"POST",
			endpoint : endpoint
		}).then(response => {
			alert(response.data.message)
			getAkun()
		})
	}

	let filterData = () => {
		akunData = realAkunData
		let targetId = document.getElementById('filter-id').value
		let targetNama = document.getElementById('filter-nama').value.toLowerCase()
		let targetRole = document.getElementById('filter-role').value.toLowerCase()

		if(activeTab == "Semua"){
			akunData = realAkunData
		}else if(activeTab == "Aktif"){
			akunData = akunData.filter(elm => {
				return elm.status_akun == "active"
			})
		}else if(activeTab == "Non-Aktif"){
			akunData = akunData.filter(elm => {
				return elm.status_akun == "non-active"
			})
		}else if(activeTab == "Pengajuan"){
			akunData = akunData.filter(elm => {
				return elm.status_akun == "diajukan" || elm.status_akun == "pending"
			})
		}

		if(targetRole == ""){
			akunData = akunData.filter(elm => {
				return elm.id_user.toString().includes(targetId) && 
					elm.nama.toLowerCase().includes(targetNama) &&
					(elm.jenis_akun != null && elm.jenis_akun.toLowerCase().includes(targetRole))
			})
		}else{
			akunData = akunData.filter(elm => {
				return elm.id_user.toString().includes(targetId) && 
					elm.nama.toLowerCase().includes(targetNama) &&
					(elm.jenis_akun != null && elm.jenis_akun.toLowerCase() == targetRole)
			})
		}
	}

	onMount(async () => {
		getRole()
		getAkun()
	})
	
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Akun" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="title-content">Data Akun</div>
					<div class="flex flex-gap-regular">
						<a href="/v1/super-admin/akun/buat" class="no-decor">
							<button class="btn-fill flex flex-center-vertical flex-gap-small">
								<img src="/images/icons/Add_Plus.svg" alt=""> 
								<span>Buat Akun</span>
							</button>
						</a>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-regular">
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<span class="{activeTab == "Semua" ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => changeTab("Semua")}>Semua</span>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<span class="{activeTab == "Aktif" ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => changeTab("Aktif")}>Aktif</span>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<span class="{activeTab == "Non-Aktif" ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => changeTab("Non-Aktif")}>Non-Aktif</span>
							<!-- svelte-ignore a11y-click-events-have-key-events -->
							<span class="{activeTab == "Pengajuan" ? 'active-notif-button' : 'unactive-notif-button'}" on:click={() => changeTab("Pengajuan")}>Pengajuan</span>
						</div>
					</div>
					<div class="flex flex-gap-semi-large w-100">
						<input type="text" placeholder="Cari ID" class="input-col-2 w-15" id="filter-id" on:keyup={filterData}>
						<input type="text" placeholder="Cari Pemegang Akun" class="input-col-2 w-20" id="filter-nama" on:keyup={filterData}>
						<select class="select-col-3 w-20" id="filter-role" on:change={filterData}>
							<option selected value="">Semua Jenis Akun</option>
							{#if roleData != null}
							{#each roleData as d}
							<option value="{d.nama_role}">{d.nama_role}</option>
							{/each}
							{/if}
						</select>
					</div>
					<div class="scroll-x flex flex-direction-col flex-gap-regular">
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-5 border-separate">
									<div class="text-drop-card">ID</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Pemegang Akun</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
									<div class="text-drop-card">Jenis Akun</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Penempatan</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-25 border-separate">
									<div class="text-drop-card">Email</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical w-15 border-separate">
									<div class="text-drop-card">No. HP</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 border-separate">
									<div class="text-drop-card">Tanggal Aktif</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 border-separate">
									<div class="text-drop-card">Status</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
								<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 border-non-separate">
									<div class="text-drop-card">Aksi</div>
									<img src="/images/icons/Arrow.svg" alt="">
								</div>
							</div>
						</div>
						{#if akunData != null}
						{#if akunData.length > 0}
						{#each akunData as d}
						<a href="/v1/super-admin/akun/detail-akun/{d.id_user}" class="no-decor">
							<div class="card-head w-content height-fit">
								<div class="flex">
									<div class="flex flex-gap-small flex-center-vertical w-5 no-border-table">
										<div class="text-drop-card">{d.id_user}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.nama}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
										<div class="text-drop-card">{d.jenis_akun}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
										<div class="text-drop-card">{d.penempatan}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-25 no-border-table">
										<div class="text-drop-card">{d.email}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15 no-border-table">
										<div class="text-drop-card">{d.no_hp == null ? 'Belum Diatur' : d.no_hp}</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 no-border-table">
										{#if d.status_akun == 'rejected'}
										<div class="text-drop-card">-</div>
										{:else}
										<div class="text-drop-card">{d.tanggal_aktif == null ? 'Tidak Terdata' : toDate(d.tanggal_aktif.split("T")[0])}</div>
										{/if}
									</div>
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 no-border-table">
										{#if d.status_akun == "active"}
										<div class="text-approve">Aktif</div>
										{:else if d.status_akun == "non-active"}
										<div class="text-reject">Non-Aktif</div>
										{:else if d.status_akun == "diajukan" || d.status_akun == "pending"}
										<div class="text-pending">Pending</div>
										{:else if d.status_akun == 'rejected'}
										<div class="text-reject">Pengajuan Ditolak</div>
										{/if}
									</div>
									<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-15 no-border-table">
										{#if d.status_akun == "active"}
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small w-100" style="white-space: nowrap;" on:click={(evt) => {
											evt.preventDefault()
											changeAccountStatus(d)
										}}><span>Non-Aktifkan</span></button>
										{:else if d.status_akun == 'non-active'}
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small w-100" on:click={(evt) => {
											evt.preventDefault()
											changeAccountStatus(d)
										}}><span>Aktifkan</span></button>
										{:else if d.status_akun == 'diajukan' || d.status_akun == 'pending' || d.status_akun == 'rejected'}
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small w-100" on:click={(evt) => {
											window.location.href = `/v1/super-admin/akun/detail-akun/${d.id_user}`
										}}><span>Lihat Detail</span></button>
										{/if}
									</div>
								</div>
							</div>
						</a>
						{/each}
						{:else}
						<div class="card-head w-content height-fit">
							<div class="flex">
								<div class="flex flex-gap-small flex-center-vertical w-100 no-border-table">
									<div class="text-drop-card">Tidak Ada Data</div>
								</div>
							</div>
						</div>
						{/if}
						{/if}
					</div>
					<div class="card w-100 height-fit">
						<div class="flex flex-between-horizontal">
							<div class="flex flex-gap-regular flex-center-vertical">
								<div class="text-display-sort">Menampilkan</div>
								<select class="select-sort">
									<option>10</option>
								</select>
								<div class="text-display-sort">dari <span class="bold-number">{akunData == null ? '' : akunData.length}</span> data Akun</div>
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