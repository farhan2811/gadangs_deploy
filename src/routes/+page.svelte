<script type="text/javascript">
	import { onMount } from 'svelte'
	import ApiController from '../ApiController'

	let doLogin;
	let email;
	let password;

	onMount(() => {

		doLogin = () => {
			if(email != "" && password != ""){
				ApiController({
					method: 'GET', 
					endpoint: `csrf-cookie`,
					// datas: {
					// 	"email": email,
					// 	"password": password
					// }
				}).then(response => {
					console.log(email)
					console.log(password)
					// console.log(getCookie('CSRF-TOKEN'));
					// window.location.href = '/admin-marketing-support/dashboard'
					ApiController({
						method: 'POST', 
						endpoint: `login`,
						datas: {
							"email": email,
							"password": password
						}
					}).then(response => {
						sessionStorage.setItem('access_token', response.data.access_token)
						sessionStorage.setItem('email', email)
						sessionStorage.setItem('password', password)
						console.log(response)
						if(response.data.privilege == "Super Admin"){
							window.location.href = '/super-admin/dashboard'
						} else if(response.data.privilege == "HO Marketing"){
							window.location.href = '/head-office-marketing/dashboard'
						} else if(response.data.privilege == "AMS"){
							window.location.href = '/admin-marketing-support/dashboard'
						} else if(response.data.privilege == "Finance"){
							window.location.href = '/finance/dashboard'
						} else if(response.data.privilege == "Teknis"){
							window.location.href = '/teknis/dashboard'
						} else if(response.data.privilege == "Legal"){
							window.location.href = '/legal/dashboard'
						}

						// window.location.href = '/admin-marketing-support/dashboard'
					}).catch(err => {
						console.log(err)
					})
					// sessionStorage.setItem('access_token', response.data.access_token)
					// sessionStorage.setItem('email', email)
					// sessionStorage.setItem('password', password)
					// window.location.href = '/admin-marketing-support/dashboard'
				}).catch(err => {
					console.log(err)
				})
			}
		}
	})
</script>

<div class="bg-opening h-100">
	<img src="/images/logo.png" class="opening-brand" alt="">
	<div class="flex h-100">
		<div class="flex flex-direction-col w-50 p-5 flex-center-horizontal">
			<img src="/images/login_vektor.png" class="w-90" alt="">
		</div>
		<div class="flex w-50 p-5 flex-direction-col flex-center-horizontal flex-center-vertical">
			<div class="flex flex-direction-col flex-gap-large w-70">
				<div class="flex flex-direction-col w-100">
					<div class="title-login">Hi, Selamat Datang</div>
					<div class="sub-title-login">di Internal Marketing Database System</div>
				</div>
				<div class=" flex flex-direction-col flex-gap-large w-100">
					<div class="flex flex-direction-col flex-gap-semi-small">
						<div class="title-input">Email</div>
						<input type="text" placeholder="masukkan email disini.." class="input-col" bind:value={email}>
					</div>
					<div class="flex flex-direction-col flex-gap-semi-small">
						<div class="title-input">Password</div>
						<input type="password" placeholder="masukkan password disini.." class="input-col" bind:value={password}>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular w-100">
					<button class="button-login flex flex-center-horizontal" on:click={() => {
						doLogin()
					}}>Masuk</button>
				</div>
			</div>
		</div>
	</div>
</div>
