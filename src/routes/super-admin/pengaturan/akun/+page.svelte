<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte';
	import Navbar from '../../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../../ApiController';

	let jenisPopUp = ''

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

	let toggleShowPassword = (check_id, input_id) => {
		if(document.getElementById(check_id).checked){
			document.getElementById(input_id).type = 'text'
		}else{
			document.getElementById(input_id).type = 'password'
		}
	}

	let checkPassword = () => {
		let old_pass = document.getElementById('password-lama').value
		let new_pass = document.getElementById('password-baru').value
		let new_pass_confirm = document.getElementById('password-konfirmasi').value

		if(new_pass != new_pass_confirm){
			createAlert('password-konfirmasi', 'Password tidak cocok dengan password baru!')
			return
		}

		if(new_pass.length < 8){
			createAlert('password-baru', 'Password setidaknya memiliki 8 karakter!')
			return
		}

		changePassword(old_pass, new_pass)
	}

	let changePassword = (old_pass, new_pass) => {
		ApiController({
			method:"POST",
			endpoint:'account/profile/edit-password',
			datas:{
				email: sessionStorage.getItem('email'),
				password: old_pass,
				password_baru: new_pass
			}
		}).then(response => {
			if(response.data.message == "User password updated."){
				document.getElementById('password-lama').value = ''
				document.getElementById('password-baru').value = ''
				document.getElementById('password-konfirmasi').value = ''

				jenisPopUp = 'password-success'
			}else{
				jenisPopUp = 'password-fail'
			}
			showPopUp()
		}).catch(err => {
			console.log(err)
			jenisPopUp = 'password-fail'
			showPopUp()
		})
	}

	let changeEmail = () => {
		let email_baru = document.getElementById('email').value

		if(!email_baru.includes('@') || email_baru == ''){
			createAlert('email', 'Mohon inputkan email yang valid!')
			return
		}

		ApiController({
			method:"POST",
			endpoint:'account/profile/edit-email',
			datas: {
				email: sessionStorage.getItem('email'),
				email_baru: email_baru
			}
		}).then(response => {
			if(response.data.message == "User email updated."){
				sessionStorage.setItem('email', document.getElementById('email').value)
				document.getElementById('email').value = ''
				jenisPopUp = 'email-success'
				
			}else{
				jenisPopUp = 'email-fail'
			}

			showPopUp()
		})
	}

	let showPopUp = () => {
		document.getElementById('pop-up').style.display = 'flex'
	}

</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="PengaturanAkun" pagePointer="admin"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="flex flex-between-horizontal flex-center-vertical w-100">
					<div class="flex  flex-direction-col flex-between-horizontal flex-gap-semi-small w-50">
						<div class="title-content">Pengaturan Akun</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Pengaturan</div>
							<img src="/images/icons/Arrow_Right.svg" alt="">
							<div class="text-breadcrumb-active">Akun</div>
						</div>
					</div>
				</div>
				<div class="flex flex-gap-large w-100">
					<div class="card w-50 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Pengaruan Email</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-100">
											<div class="title-input-nup">Email Baru</div>
											<input type="email" name="" class="input-nup" id="email">
										</div>
									</div>
									<div class="flex flex-direction-row flex-end-horizontal flex-gap-regular w-100">
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
											createAlert('email', '')
											document.getElementById('email').value = ''
										}}>
											<span>Batal</span>
										</button>
										<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={changeEmail}>
											<span>Simpan</span>
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="flex flex-gap-large w-100">
					<div class="card w-50 flex flex-direction-col flex-gap-large">
						<div class="flex flex-direction-col ">
							<div class="flex flex-between-horizontal flex-center-vertical">
								<div class="w-100 flex flex-direction-col flex-gap-semi-large">
									<div class="main-title-card-detail">Pengaturan Password</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-48">
											<div class="title-input-nup">Password Lama</div>
											<input type="password" id="password-lama" class="input-nup" />
											<div class="flex flex-direction-row flex-gap-small w-100">
												<input type="checkbox" id="show-password-lama" on:change={() => toggleShowPassword('show-password-lama', 'password-lama')}>
												<label class="title-input-nup" for="show-password-lama">Tampilkan Password</label>
											</div>
										</div>
									</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Password Baru</div>
											<input type="password" id="password-baru" class="input-nup" />
											<div class="flex flex-direction-row flex-gap-small w-100">
												<input type="checkbox" id="show-password-baru" on:change={() => toggleShowPassword('show-password-baru', 'password-baru')}>
												<label class="title-input-nup" for="show-password-baru">Tampilkan Password</label>
											</div>
										</div>
										<div class="flex flex-direction-col flex-gap-small w-50">
											<div class="title-input-nup">Konfirmasi Password Baru</div>
											<input type="password" id="password-konfirmasi" class="input-nup" />
											<div class="flex flex-direction-row flex-gap-small w-100">
												<input type="checkbox" id="show-password-konfirmasi" on:change={() => toggleShowPassword('show-password-konfirmasi', 'password-konfirmasi')}>
												<label class="title-input-nup" for="show-password-konfirmasi">Tampilkan Password</label>
											</div>
										</div>
									</div>
									<div class="flex flex-direction-row flex-end-horizontal flex-gap-regular w-100">
										<button class="btn-outline flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => {
											document.getElementById('password-lama').value = ''
											document.getElementById('password-baru').value = ''
											document.getElementById('password-konfirmasi').value = ''
										}}>
											<span>Batal</span>
										</button>
										<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={checkPassword}>
											<span>Simpan</span>
										</button>
									</div>
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
	<div class="pop-up-container" style="width: 350px;">
		{#if jenisPopUp == 'email-success'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Email berhasil diubah!</div>
			<div class="pop-up-body">Data email berhasil diubah, silahkan gunakan email yang baru untuk login berikutnya.</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{:else if jenisPopUp == 'email-fail'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Email gagal diubah!</div>
			<div class="pop-up-body">Mohon pastikan email yang digunakan adalah email yang valid dan tidak pernah digunakan sebelumnya!</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{:else if jenisPopUp == 'password-success'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Password berhasil diubah!</div>
			<div class="pop-up-body">Password anda berhasil diubah, silahkan gunakan password yang baru untuk login berikutnya.</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{:else if jenisPopUp == 'password-fail'}
		<div class="w-100" style="display: flex; flex-direction: column; gap: 8px;">
			<div class="pop-up-title">Password gagal diubah!</div>
			<div class="pop-up-body">Mohon pastikan password lama yang diinputkan adalah benar!</div>
		</div>
		<div class="flex w-100 flex-gap-regular">
			<button class="btn-fill flex flex-center-vertical flex-center-horizontal flex-gap-small" on:click={() => document.getElementById('pop-up').style.display = 'none'} style="flex: 1;">
				<span>Tutup</span>
			</button>
		</div>
		{/if}
	</div>
</div>
