<script type="text/javascript">
	import Sidebar from '../../../../components/sidebar.svelte';
	import Navbar from '../../../../components/navbar.svelte';
	import { onMount } from 'svelte';
	import { fly, scale } from 'svelte/transition';
	import ApiController from '../../../../ApiController';

	let roleData = null
	let perumData = null

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

	let getRole = () => {
		ApiController({
			method: "GET",
			endpoint: 'role'
		}).then(response => {
			roleData = response.data.data
		})
	}

	let getPerum = () => {
		ApiController({
			method: "GET",
			endpoint: "perumahan"
		}).then(response => {
			perumData = response.data.data
		})
	}

	let buatAkun = () => {
		let nama = document.getElementById('nama').value
		let jenis_akun = document.getElementById('role').value
		let penempatan = document.getElementById('penempatan').value
		let perum = document.getElementById('perum').value
		let email = document.getElementById('email').value
		let password = document.getElementById('password').value

		if(nama == ""){
			createAlert('nama', 'Mohon isi nama pengguna akun!')
		}

		if(email == ''){
			createAlert('email', 'Mohon isi email pengguna akun!')
		}

		if(password == ''){
			createAlert('password', 'Mohon isi password pengguna akun!')
		}

		if(nama != "" && email != "" && password != ""){
			if(penempatan == "Perumahan"){
				penempatan = perum
			}

			ApiController({
				method: "POST",
				endpoint: 'account/add',
				datas : {
					nama, jenis_akun, penempatan, email, password
				}
			}).then(response => {
				alert('Akun berhasil dibuat!')
				window.location.href = '/super-admin/akun'
			})
		}
	}
	
	onMount(async () => {
		getRole()
		getPerum()
	})

</script>

<div id="after-login-layout">
	<Navbar />
	<div class="flex">
		<Sidebar statusPointer="Akun" pagePointer="admin" />
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large">
				<div class="flex flex-direction-col flex-gap-semi-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small w-100">
						<div class="title-content">Buat Akun</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-breadcrumb">Akun</div>
							<img src="/images/icons/Arrow_Right.svg" alt="" />
							<div class="text-breadcrumb-active">Buat</div>
						</div>
					</div>
					<div class="card w-80">
						<div class="flex flex-direction-col flex-gap-semi-large">
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Nama Lengkap</div>
									<input type="text" id="nama" class="input-nup" />
								</div>
							</div>
							<div class="flex flex-gap-regular w-100">
								<div class="flex flex-direction-col flex-gap-small w-30">
									<div class="title-input-nup">Jenis Akun</div>
									<select class="select-nup" id="role">
										{#if roleData != null}
										{#each roleData as d}
										<option value="{d.id_role}">{d.nama_role}</option>	
										{/each}
										{/if}
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small w-25">
									<div class="title-input-nup">Penempatan</div>
									<select class="select-nup" id="penempatan" on:change={() => {
										if(document.getElementById('penempatan').value == 'Perumahan'){
											document.getElementById('container-perumahan').style.display = 'flex'
										}else{
											document.getElementById('container-perumahan').style.display = 'none'
										}
									}}>
										<option value="Head Office">Head Office</option>	
										<option value="Perumahan">Perumahan</option>
									</select>
								</div>
								<div class="flex flex-direction-col flex-gap-small" style="display: none; flex-grow: 1;" id="container-perumahan">
									<div class="title-input-nup">Pilih Perumahan</div>
									<select class="select-nup" id="perum">
										{#if perumData != null}
										{#each perumData as d}
										<option value="{d.nama}">{d.nama}</option>
										{/each}
										{/if}
									</select>
								</div>
							</div>
							<div class="flex flex-gap-regular">
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Email</div>
									<input type="text" id="email" class="input-nup" />
								</div>
								<div class="flex flex-direction-col flex-gap-small w-50">
									<div class="title-input-nup">Password</div>
									<input type="password" id="password" class="input-nup" />
									<div class="flex flex-direction-row flex-gap-small w-100 flex-end-horizontal">
										<label class="title-input-nup" for="show-password">Tampilkan Password</label>
										<input type="checkbox" name="show-password" id="show-password" on:change={() => {
											let state = document.getElementById('show-password').checked
											
											if(state){
												document.getElementById('password').type = 'text'
											}else{
												document.getElementById('password').type = 'password'
											}
										}}>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-end-horizontal w-80">
						<div class="w-40 flex flex-gap-regular flex-end-horizontal">
							<button class="btn-outline flex flex-center-vertical flex-gap-small"
							on:click={() => window.history.back()}>
								<span>Batal</span>
							</button> 
							<button class="btn-fill flex flex-center-vertical flex-gap-small" on:click={() => {
								buatAkun()
							}}>
								<span>Simpan</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
