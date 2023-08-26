<script type="text/javascript">
	import {fly, scale} from 'svelte/transition'
	import { onMount } from 'svelte';
	import ApiController from '../ApiController'

	export let statusPointer;
	export let pagePointer;

	let settings_drop = 0;
	let userProfile;
	let dropKomisi = false
	dropKomisi = statusPointer == 'DaftarKomisi' || statusPointer == 'AturKomisi' ? true : false
	let dropProfil = false
	let dropPengaturan = false

	dropPengaturan = statusPointer == 'PengaturanProfile' || statusPointer == 'PengaturanAkun' ? true : false
	let getProfile = () => {
		ApiController({
			method:"POST",
			endpoint:"account/profile",
			datas:{
				email: sessionStorage.getItem('email')
			}
		}).then(response => {
			userProfile = response.data.data
			console.log(userProfile)
		})
	}

	onMount(() => {
		getProfile();
	})
</script>
{#if pagePointer == "ams"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content">
					<div class="flex flex-gap-small w-80">
						<img src="/images/avatar.png" class="polished-img">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								Jane Doe
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-10">
						<i class="fa-solid fa-angle-up position-angle"></i>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					<div class="flex flex-direction-col">
						<div class="flex flex-gap-semi-small flex-center-vertical sidebar-content pointer" on:click={() => {
								if (settings_drop == 0) {
									settings_drop = 1
								} else {
									settings_drop = 0
								}
							}}>
							<div class="flex flex-gap-semi-small flex-center-vertical w-80">
								<img src="/images/icons/Settings.png" class="icon-sidebar">
								<span class="text-sidebar">Pengaturan</span>
							</div>
							<div class="flex flex-end-horizontal w-10">
								{#if settings_drop == 1}
									<i class="fa-solid fa-angle-down position-angle"></i>
								{:else}
									<i class="fa-solid fa-angle-up position-angle"></i>
								{/if}
							</div>
						</div>
						{#if settings_drop == 1}
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Profile</span>
									</div>
								</div>
							</a>
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Akun</span>
									</div>
								</div>
							</a>
							<div class="flex flex-gap-semi-small sidebar-content flex-center-vertical" in:fly={{ y: -20, duration: 600 }}>
								<div class="flex flex-gap-semi-small flex-center-vertical w-90">
									<img src="/images/icons/Log_Out.png" class="icon-sidebar">
									<a href="/" class="no-decor">
										<span class="text-sidebar">Keluar</span>
									</a>
								</div>
							</div>
						{/if}
					</div>
					{#if settings_drop == 1}
						<div class="flex flex-center-horizontal w-100" in:fly={{ y: -20, duration: 600 }}>
							<div class="line-dropdown"></div>
						</div>
					{/if}
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/admin-marketing-support/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/admin-marketing-support/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/admin-marketing-support/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/admin-marketing-support/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Rekap"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/admin-marketing-support/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/admin-marketing-support/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist.svg" class="icon-sidebar">
										<span class="text-sidebar">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Laporan"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/admin-marketing-support/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/admin-marketing-support/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check.svg" class="icon-sidebar">
										<span class="text-sidebar">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Nup"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/admin-marketing-support/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/admin-marketing-support/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book.png" class="icon-sidebar">
											<span class="text-sidebar">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Pemberkasan"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/admin-marketing-support/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Pemberkasan_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/admin-marketing-support/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Notebook.svg" class="icon-sidebar">
											<span class="text-sidebar">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Progress"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/admin-marketing-support/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/admin-marketing-support/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check.svg" class="icon-sidebar">
											<span class="text-sidebar">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Akad"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/admin-marketing-support/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/admin-marketing-support/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake.svg" class="icon-sidebar">
											<span class="text-sidebar">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/admin-marketing-support/cicilan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Ordered.svg" class="icon-sidebar">
										<span class="text-sidebar">Cicilan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="footer-sidebar">
				<div class="footer-text">AMS - Griya Panorama Cimanggung</div>
			</div>
		</div>
	</div>	
{:else if pagePointer == "admin"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content" on:click={() => dropProfil = !dropProfil} style="cursor: pointer;">
					<div class="flex flex-gap-small w-80">
						{#if userProfile}
						<img src="{userProfile.pas_photo}" class="polished-img" alt="">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								{userProfile.nama}
							</div>
						</div>
						{/if}
					</div>
					<div class="flex flex-end-horizontal w-10">
						{#if dropProfil}
						<i class="fa-solid fa-angle-down position-angle"></i>
						{:else}
						<i class="fa-solid fa-angle-up position-angle"></i>
						{/if}
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					{#if dropProfil}
					{#if dropPengaturan}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="flex flex-direction-col active-sidebar" style="cursor: pointer;"
					on:click={() => {dropPengaturan = !dropPengaturan}}>
						<div class="flex flex-direction-row flex-between-horizontal sidebar-content">
							<div class="flex flex-gap-semi-small flex-center-vertical">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<img alt="" src="/images/icons/Settings_Active.svg" class="icon-sidebar">
									<span class="text-sidebar-active">Pengaturan</span>
								</div>
							</div>
							<img src="/images/icons/Caret_Down_MD.svg" alt="">
						</div>
						<a href="/v1/super-admin/pengaturan/profile" class="no-decor">
							<div class="flex flex-gap-semi-small flex-center-vertical sidebar-content">
								<img alt="" src="/images/icons/List_Ordered_Active.svg" class="icon-sidebar" style="visibility: hidden;">
								<span class="{statusPointer == "PengaturanProfile" ? 'text-sidebar-active' : 'text-sidebar'}">Profile</span>
							</div>
						</a>
						<a href="/v1/super-admin/pengaturan/akun" class="no-decor">
							<div class="flex flex-gap-semi-small flex-center-vertical sidebar-content">
								<img alt="" src="/images/icons/List_Ordered_Active.svg" class="icon-sidebar" style="visibility: hidden;">
								<span class="{statusPointer == "PengaturanAkun" ? 'text-sidebar-active' : 'text-sidebar'}">Akun</span>
							</div>
						</a>
					</div>
					{:else}
					<!-- svelte-ignore a11y-click-events-have-key-events -->
					<div class="flex flex-direction-col flex-gap-semi-large" style="cursor: pointer;"
					on:click={() => {dropPengaturan = !dropPengaturan}}>
						<div class="flex flex-direction-row flex-between-horizontal sidebar-content">
							<div class="flex flex-gap-semi-small flex-center-vertical">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<img alt="" src="/images/icons/Settings.svg" class="icon-sidebar">
									<span class="text-sidebar">Pengaturan</span>
								</div>
							</div>
							<img src="/images/icons/Caret_Up_MD.svg" alt="">
						</div>
					</div>
					{/if}
					<div class="flex flex-direction-col flex-gap-semi-large pointer" on:click={() => {
						localStorage.removeItem("img");
						localStorage.removeItem("email");
						localStorage.removeItem("name");
						localStorage.removeItem("token");
						window.location.href = "/"
					}}>
						<div class="flex flex-direction-col flex-gap-regular sidebar-content">
							<div class="flex flex-gap-semi-small flex-center-vertical">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<img src="/images/icons/Log_Out.png" class="icon-sidebar" alt="">
									<span class="text-sidebar">Keluar</span>
								</div>
							</div>
						</div>
					</div>
					{/if}
					<div style="padding: 0 8px;">
						<div style="border-top: 1px solid #E5E5E5;"></div>
					</div>
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/v1/super-admin/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/v1/super-admin/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Laporan"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check.svg" class="icon-sidebar">
										<span class="text-sidebar">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Rekap"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist.svg" class="icon-sidebar">
										<span class="text-sidebar">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "KelolaPerum"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/kelola-perum" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_04_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Kelola Perum</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/kelola-perum" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_04.svg" class="icon-sidebar">
										<span class="text-sidebar">Kelola Perum</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Nup"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/v1/super-admin/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/v1/super-admin/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book.png" class="icon-sidebar">
											<span class="text-sidebar">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Pemberkasan"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/v1/super-admin/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Pemberkasan_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/v1/super-admin/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Notebook.svg" class="icon-sidebar">
											<span class="text-sidebar">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Komisi"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/v1/super-admin/komisi" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img alt="" src="/images/icons/Komisi_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Komisi</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/v1/super-admin/komisi" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img alt="" src="/images/icons/Komisi.svg" class="icon-sidebar">
											<span class="text-sidebar">Komisi</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Cicilan"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/cicilan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img alt="" src="/images/icons/List_Ordered_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Cicilan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/cicilan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img alt="" src="/images/icons/List_Ordered.svg" class="icon-sidebar">
										<span class="text-sidebar">Cicilan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Akun"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/akun" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/User_Card_ID_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Akun</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/akun" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/User_Card_ID.svg" class="icon-sidebar">
										<span class="text-sidebar">Akun</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Agensi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/agensi" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Columns_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Agensi</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/agensi" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Columns.svg" class="icon-sidebar">
										<span class="text-sidebar">Agensi</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					<!-- <div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/super-admin/nup" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Users_Group.svg" class="icon-sidebar">
										<span class="text-sidebar">Marketing</span>
									</div>
								</div>
							</div>
						</a>
					</div> -->
					{#if statusPointer == "Approval"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/v1/super-admin/approval" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Mail_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Approval</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/v1/super-admin/approval" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Mail.svg" class="icon-sidebar">
										<span class="text-sidebar">Approval</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
				</div>
			</div>
			<div class="footer-sidebar">
				<div class="footer-text">Super Admin</div>
			</div>
		</div>
	</div>	
	{:else if pagePointer == "ho"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content">
					<div class="flex flex-gap-small w-80">
						<img src="/images/avatar.png" class="polished-img">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								Jane Doe
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-10">
						<i class="fa-solid fa-angle-up position-angle"></i>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					<div class="flex flex-direction-col">
						<div class="flex flex-gap-semi-small flex-center-vertical sidebar-content pointer" on:click={() => {
								if (settings_drop == 0) {
									settings_drop = 1
								} else {
									settings_drop = 0
								}
							}}>
							<div class="flex flex-gap-semi-small flex-center-vertical w-80">
								<img src="/images/icons/Settings.png" class="icon-sidebar">
								<span class="text-sidebar">Pengaturan</span>
							</div>
							<div class="flex flex-end-horizontal w-10">
								{#if settings_drop == 1}
									<i class="fa-solid fa-angle-down position-angle"></i>
								{:else}
									<i class="fa-solid fa-angle-up position-angle"></i>
								{/if}
							</div>
						</div>
						{#if settings_drop == 1}
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Profile</span>
									</div>
								</div>
							</a>
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Akun</span>
									</div>
								</div>
							</a>
							<div class="flex flex-gap-semi-small sidebar-content flex-center-vertical" in:fly={{ y: -20, duration: 600 }}>
								<div class="flex flex-gap-semi-small flex-center-vertical w-90">
									<img src="/images/icons/Log_Out.png" class="icon-sidebar">
									<span class="text-sidebar">Keluar</span>
								</div>
							</div>
						{/if}
					</div>
					{#if settings_drop == 1}
						<div class="flex flex-center-horizontal w-100" in:fly={{ y: -20, duration: 600 }}>
							<div class="line-dropdown"></div>
						</div>
					{/if}
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/head-office-marketing/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/head-office-marketing/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/head-office-marketing/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/head-office-marketing/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Rekap"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/head-office-marketing/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/head-office-marketing/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist.svg" class="icon-sidebar">
										<span class="text-sidebar">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Laporan"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/head-office-marketing/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/head-office-marketing/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check.svg" class="icon-sidebar">
										<span class="text-sidebar">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Nup"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/head-office-marketing/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/head-office-marketing/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book.png" class="icon-sidebar">
											<span class="text-sidebar">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Pemberkasan"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/head-office-marketing/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Pemberkasan_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/head-office-marketing/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Notebook.svg" class="icon-sidebar">
											<span class="text-sidebar">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Progress"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/head-office-marketing/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/head-office-marketing/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check.svg" class="icon-sidebar">
											<span class="text-sidebar">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Akad"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/head-office-marketing/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/head-office-marketing/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake.svg" class="icon-sidebar">
											<span class="text-sidebar">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/head-office-marketing/cicilan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Ordered.svg" class="icon-sidebar">
										<span class="text-sidebar">Cicilan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="footer-sidebar">
				<div class="footer-text">Marketing Head Office</div>
				<div class="footer-text">(HO)</div>
			</div>
		</div>
	</div>	
	{:else if pagePointer == "finance"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content">
					<div class="flex flex-gap-small w-80">
						<img src="/images/avatar.png" class="polished-img">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								Jane Doe
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-10">
						<i class="fa-solid fa-angle-up position-angle"></i>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					<div class="flex flex-direction-col">
						<div class="flex flex-gap-semi-small flex-center-vertical sidebar-content pointer" on:click={() => {
								if (settings_drop == 0) {
									settings_drop = 1
								} else {
									settings_drop = 0
								}
							}}>
							<div class="flex flex-gap-semi-small flex-center-vertical w-80">
								<img src="/images/icons/Settings.png" class="icon-sidebar">
								<span class="text-sidebar">Pengaturan</span>
							</div>
							<div class="flex flex-end-horizontal w-10">
								{#if settings_drop == 1}
									<i class="fa-solid fa-angle-down position-angle"></i>
								{:else}
									<i class="fa-solid fa-angle-up position-angle"></i>
								{/if}
							</div>
						</div>
						{#if settings_drop == 1}
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Profile</span>
									</div>
								</div>
							</a>
							<a href="" class="no-decor">
								<div class="flex flex-gap-semi-small sidebar-content" in:fly={{ y: -20, duration: 600 }}>
									<div class="flex flex-gap-semi-small flex-center-vertical w-90">
										<div class="icon-sidebar"></div>
										<span class="text-sidebar">Akun</span>
									</div>
								</div>
							</a>
							<div class="flex flex-gap-semi-small sidebar-content flex-center-vertical" in:fly={{ y: -20, duration: 600 }}>
								<div class="flex flex-gap-semi-small flex-center-vertical w-90">
									<img src="/images/icons/Log_Out.png" class="icon-sidebar">
									<span class="text-sidebar">Keluar</span>
								</div>
							</div>
						{/if}
					</div>
					{#if settings_drop == 1}
						<div class="flex flex-center-horizontal w-100" in:fly={{ y: -20, duration: 600 }}>
							<div class="line-dropdown"></div>
						</div>
					{/if}
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/finance/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/finance/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/finance/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/finance/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Rekap"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/finance/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/finance/rekap-data" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Checklist.svg" class="icon-sidebar">
										<span class="text-sidebar">Rekap Data</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Laporan"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/finance/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/finance/laporan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Calendar_Check.svg" class="icon-sidebar">
										<span class="text-sidebar">Laporan Mingguan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Nup"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/finance/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/finance/nup" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Book.png" class="icon-sidebar">
											<span class="text-sidebar">NUP</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Pemberkasan"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/finance/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Pemberkasan_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/finance/pemberkasan" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Notebook.svg" class="icon-sidebar">
											<span class="text-sidebar">Pemberkasan</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Progress"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/finance/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/finance/progress" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/List_Check.svg" class="icon-sidebar">
											<span class="text-sidebar">Checklist Progress</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Akad"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/finance/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake_Active.svg" class="icon-sidebar">
											<span class="text-sidebar-active">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/finance/akad" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Heart_Handshake.svg" class="icon-sidebar">
											<span class="text-sidebar">Proses Akad</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/finance/cicilan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/List_Ordered.svg" class="icon-sidebar">
										<span class="text-sidebar">Cicilan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
				</div>
			</div>
			<div class="footer-sidebar">
				<div class="footer-text">Finance</div>
			</div>
		</div>
	</div>	
	{:else if pagePointer == "legal"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content">
					<div class="flex flex-gap-small w-80">
						<img src="/images/avatar.png" class="polished-img">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								Jane Doe
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-10">
						<i class="fa-solid fa-angle-up position-angle"></i>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/legal/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/legal/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Unit"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/legal/unit" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_02_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Unit</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/legal/unit" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_02.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Unit</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
	{:else if pagePointer == "teknis"}
	<div class="sidebar w-20">
		<div class="h-100 flex flex-direction-col flex-between-horizontal">
			<div class="flex flex-direction-col flex-gap-regular">
				<div class="flex flex-gap-semi-small sidebar-content">
					<div class="flex flex-gap-small w-80">
						<img src="/images/avatar.png" class="polished-img">
						<div class="flex flex-direction-col flex-center-horizontal">
							<div class="welcome-sidebar">
								Selamat Datang
							</div>
							<div class="name-sidebar">
								Jane Doe
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-10">
						<i class="fa-solid fa-angle-up position-angle"></i>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-small">
					{#if statusPointer == "Dashboard"}
						<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
							<a href="/teknis/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard_Active.png" class="icon-sidebar">
											<span class="text-sidebar-active">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{:else}
						<div class="flex flex-direction-col flex-gap-semi-large">
							<a href="/teknis/dashboard" class="no-decor">
								<div class="flex flex-direction-col flex-gap-regular sidebar-content">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<div class="flex flex-gap-semi-small flex-center-vertical">
											<img src="/images/icons/Dashboard.png" class="icon-sidebar">
											<span class="text-sidebar">Dashboard</span>
										</div>
									</div>
								</div>
							</a>
						</div>
					{/if}
					{#if statusPointer == "Kompilasi"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_Active_03.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/super-admin/kompilasi-perumahan" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/House_03.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Kompilasi Perumahan</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
					{#if statusPointer == "Unit"}
					<div class="flex flex-direction-col flex-gap-semi-large active-sidebar">
						<a href="/teknis/unit" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_02_Active.svg" class="icon-sidebar">
										<span class="text-sidebar-active">Data Unit</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{:else}
					<div class="flex flex-direction-col flex-gap-semi-large">
						<a href="/teknis/unit" class="no-decor">
							<div class="flex flex-direction-col flex-gap-regular sidebar-content">
								<div class="flex flex-gap-semi-small flex-center-vertical">
									<div class="flex flex-gap-semi-small flex-center-vertical">
										<img src="/images/icons/Building_02.svg" class="icon-sidebar">
										<span class="text-sidebar">Data Unit</span>
									</div>
								</div>
							</div>
						</a>
					</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
{/if}
