<script type="text/javascript">
	import Sidebar from '../../../../../components/sidebar.svelte'
	import Navbar from '../../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../../ApiController';

	let editState = false 
	let userProfile = null
	let popUpStatus = ''

	let createAlert = (inputId, msg) => {
		if(document.getElementById(`alert-${inputId}`)){
			document.getElementById(`alert-${inputId}`).remove()
		}

		let parent = document.getElementById(inputId).parentElement
		let text = document.createElement('p')
		text.id = `alert-${inputId}`
		text.textContent = msg
		text.style.color = "red"
		text.style.fontSize = "12px"
		parent.appendChild(text)

		document.getElementById(inputId).addEventListener('change', () => {
			if(document.getElementById(`alert-${inputId}`)){
				document.getElementById(`alert-${inputId}`).remove()
			}
		})
	}

	let getProfile = () => {
		ApiController({
			method:"POST",
			endpoint:"account/profile",
			datas:{
				email: sessionStorage.getItem('email')
			}
		}).then(response => {
			userProfile = response.data.data
		})
	}

	let editDetected = () => {
		editState = true
	}

	let updateProfile = () => {
		let data = {
			email: sessionStorage.getItem('email'),
			nama: document.getElementById('nama').value,
			no_ktp: document.getElementById('ktp').value,
			alamat: document.getElementById('alamat').value,
			rt: document.getElementById('rt').value,
			rw: document.getElementById('rw').value,
			kelurahan: document.getElementById('kelurahan').value,
			kecamatan: document.getElementById('kecamatan').value,
			kode_pos: document.getElementById('kode_pos').value,
			provinsi: document.getElementById('provinsi').value,
			kabupaten_kota: document.getElementById('kabupaten_kota').value
		}

		if(data.nama == ""){
			createAlert('nama', 'Nama tidak boleh kosong!')
			return
		}

		ApiController({
			method:"POST",
			endpoint:'account/profile/edit',
			datas: data
		}).then(response => {
			editState = false
			if(response.data.message = "User profile updated."){
				showPopUp('success')
				getProfile()
			}else{
				showPopUp('fail')
			}
		})
	}

	let showPopUp = (status) => {
		popUpStatus = status
		document.getElementById('pop-up').style.display = 'flex'
	}

	let changeProfilePicture = (reset) => {
		let formData = new FormData()
		formData.append('email', sessionStorage.getItem('email'))

		if(reset){
			formData.append('pas_photo', null)
		}else{
			let uploadedImage = document.getElementById('upload').files[0]
			console.log(uploadedImage)
			formData.append('pas_photo', uploadedImage)
		}

		ApiController({
			method:"POST",
			endpoint:'account/profile/edit-photo',
			datas: formData,
			sendForm: true
		}).then(response => {
			console.log(response)
			if(response.data.message == 'User photo profile updated.'){
				showPopUp('success')
				getProfile()
			}else{
				showPopUp('fail')
			}
		})
	}

	onMount(async () => {
		getProfile()
	})

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="PengaturanProfile" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-50">
						<div class="title-content">Pengaturan Profile</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Pengaturan</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Profile</div>
						</div>
					</div>
				</div>
				<div class="flex flex-gap-large w-100">
					<div class="card w-60 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Informasi Personal</div>
									{#if userProfile != null}
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-70">
											<div class="title-input-nup">Nama Lengkap</div>
											<input type="text" class="input-nup" id="nama" value="{userProfile.nama}" on:change={editDetected}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-30">
											<div class="title-input-nup">No KTP</div>
											<input type="text" name="" class="input-nup" id="ktp" value="{userProfile.no_ktp == null ? '' : userProfile.no_ktp}" placeholder="{userProfile.no_ktp == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Alamat</div>
											<input type="text" name="" class="input-nup" id="alamat" value="{userProfile.alamat == null ? '' : userProfile.alamat}" placeholder="{userProfile.alamat == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small" style="width: 23.5%;">
											<div class="title-input-nup">RT</div>
											<input type="number" name="" class="input-nup" id="rt" value="{userProfile.rt == null ? '' : userProfile.rt}" placeholder="{userProfile.rt == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
										<div class="flex flex-direction-col flex-gap-small" style="width: 23.5%;">
											<div class="title-input-nup">RW</div>
											<input type="number" name="" class="input-nup" id="rw" value="{userProfile.rw == null ? '' : userProfile.rw}" placeholder="{userProfile.rw == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Kelurahan</div>
											<input type="text" name="" class="input-nup" id="kelurahan" value="{userProfile.kelurahan == null ? '' : userProfile.kelurahan}" placeholder="{userProfile.kelurahan == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Kecamatan</div>
											<input type="text" name="" class="input-nup" id="kecamatan" value="{userProfile.kecamatan == null ? '' : userProfile.kecamatan}" placeholder="{userProfile.kecamatan == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Kode Pos</div>
											<input type="number" name="" class="input-nup" id="kode_pos" value="{userProfile.kode_pos == null ? '' : userProfile.kode_pos}" placeholder="{userProfile.kode_pos == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Kota/Kabupaten</div>
											<input type="text" name="" class="input-nup" id="kabupaten_kota" value="{userProfile.kabupaten_kota == null ? '' : userProfile.kabupaten_kota}" placeholder="{userProfile.kabupaten_kota == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Provinsi</div>
											<input type="text" name="" class="input-nup" id="provinsi" value="{userProfile.provinsi == null ? '' : userProfile.provinsi}" placeholder="{userProfile.provinsi == null ? 'Belum Diatur' : ''}" on:change={editDetected}>
										</div>
									</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
					<div class="card w-25 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Foto Profile Anda</div>
									{#if userProfile != null}
									<img src="{userProfile.pas_photo}" class="w-100 img-detail-akun" alt="">
									<div class="flex flex-direction-col flex-gap-regular">
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small w-100" on:click={() => {
											document.getElementById('upload').click()
										}}>
											<span>Ubah Foto</span>
											<img src="/images/icons/Edit_Pencil_Blue.svg" alt="">
										</button>
										<input type="file" id="upload" hidden="" accept="image/png, image/jpeg" style="display: none;" on:change={() => changeProfilePicture(false)}>
										{#if userProfile.pas_photo != 'https://test.e-syakl.org/web-resource/default.png'}
										<button class="btn-fill-danger flex flex-center-vertical flex-center-horizontal flex-gap-small w-100" on:click={() => {
											changeProfilePicture(true)
										}}>
											<span>Hapus Foto</span>
											<img src="/images/icons/Trash_White.svg" alt="">
										</button>
										{/if}
									</div>
									{/if}
								</div>
							</div>
						</div>
					</div>
				</div>
				{#if editState}
				<div class="flex flex-direction-row flex-end-horizontal flex-gap-regular w-60">
					<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small"><span>Batal</span></button>
					<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={updateProfile}><span>Simpan Perubahan</span></button>
				</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<div id="pop-up" class="pop-up-background">
	<div class="pop-up-container" style="width: 350px;">
		{#if popUpStatus == 'success'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Update Profile Berhasil!</div>
			<div class="pop-up-body">Data profile anda berhasil diperbaharui.</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{:else if popUpStatus == 'fail'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Update Profile Gagal!</div>
			<div class="pop-up-body">Data profile anda gagal diperbaharui. Silahkan cek kembali dan pastikan data yang diinputkan benar!</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{/if}
	</div>
</div>