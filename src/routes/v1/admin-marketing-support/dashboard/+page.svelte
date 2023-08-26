<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../ApiController';

	let getDashboard = () => {
		ApiController({
			method: "GET",
			endpoint: `dashboard`
		}).then(response => {
			console.log(response);
		})
	}

	onMount(() => {

		getDashboard();
		var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June"],
                datasets: [{
                    label: 'Penjualan dalam 6 bulan terakhir',
                    data: [12, 19, 15, 7, 12, 5],
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
	})
</script>

<div id="after-login-layout">
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Dashboard" pagePointer="ams"/>
		<div class="w-80 content">
			<div class="flex flex-direction-col flex-gap-large" in:fly={{ y: -20, duration: 600 }}>
				<div class="title-content">Dashboard</div>
				<div class="flex flex-direction-col flex-gap-semi-large">
					<div class="sub-title-content">Ringkasan</div>
					<div class="flex flex-gap-large">
						<div class="card flex flex-center-horizontal flex-center-vertical flex-gap-semi-small">
							<div class="box-icon flex flex-center-horizontal flex-center-vertical">
								<img src="/images/icons/Building.svg">
							</div>
							<div class="flex flex-direction-col">
								<div class="title-small-card-dashboard">Total Penjualan</div>
								<div class="flex flex-center-vertical flex-gap-small">
									<div class="value-small-card-dashboard">1000</div>
									<div class="unit-small-card-dashboard">Unit</div>
								</div>
							</div>
						</div>
						<div class="card flex flex-center-horizontal flex-center-vertical flex-gap-semi-small">
							<div class="box-icon flex flex-center-horizontal flex-center-vertical">
								<img src="/images/icons/Book.svg">
							</div>
							<div class="flex flex-direction-col">
								<div class="title-small-card-dashboard">Pengajuan Berlangsung</div>
								<div class="flex flex-center-vertical flex-gap-small">
									<div class="value-small-card-dashboard">62</div>
									<div class="unit-small-card-dashboard">Pengajuan</div>
								</div>
							</div>
						</div>
						<div class="card flex flex-center-horizontal flex-center-vertical flex-gap-semi-small">
							<div class="box-icon flex flex-center-horizontal flex-center-vertical">
								<img src="/images/icons/Check.svg">
							</div>
							<div class="flex flex-direction-col">
								<div class="title-small-card-dashboard">Pengajuan Selesai</div>
								<div class="flex flex-center-vertical flex-gap-small">
									<div class="value-small-card-dashboard">1000</div>
									<div class="unit-small-card-dashboard">Pengajuan</div>
								</div>
							</div>
						</div>
						<div class="card flex flex-center-horizontal flex-center-vertical flex-gap-semi-small">
							<div class="box-icon flex flex-center-horizontal flex-center-vertical">
								<img src="/images/icons/Home.svg">
							</div>
							<div class="flex flex-direction-col">
								<div class="title-small-card-dashboard">Total Proyek</div>
								<div class="flex flex-center-vertical flex-gap-small">
									<div class="value-small-card-dashboard">500</div>
									<div class="unit-small-card-dashboard">Proyek</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-gap-regular">
						<div class="card w-50">
							<div class="title-card-dashboard">Penjualan Tahun Ini</div>
							<div style="width: 100%;"><canvas id="myChart"></canvas></div>
						</div>
						<div class="flex flex-direction-col flex-gap-regular w-50">
							<div class="card w-100 height-fit">
								<div class="flex flex-direction-col flex-gap-regular">
									<div class="title-card-dashboard">Aktivitas Log</div>
									<div class="flex flex-gap-regular">
										<div class="flex flex-gap-small flex-center-vertical w-10">
											<div class="text-drop-card">No</div>
											<img src="/images/icons/Arrow.svg">
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20">
											<div class="text-drop-card">Tanggal</div>
											<img src="/images/icons/Arrow.svg">
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-70">
											<div class="text-drop-card">Aktivitas</div>
											<img src="/images/icons/Arrow.svg">
										</div>
									</div>
								</div>
							</div>
							<div class="card w-100 height-fit">
								<div class="flex flex-direction-col flex-gap-regular">
									<div class="flex flex-gap-regular">
										<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10">
											<div class="text-drop-card">1</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20">
											<div class="text-drop-card">15-01-2023</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-70">
											<div class="text-drop-card">Pengajuan Surat</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card w-100 height-fit">
								<div class="flex flex-direction-col flex-gap-regular">
									<div class="flex flex-gap-regular">
										<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10">
											<div class="text-drop-card">2</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20">
											<div class="text-drop-card">14-01-2023</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-70">
											<div class="text-drop-card">Login</div>
										</div>
									</div>
								</div>
							</div>
							<div class="card w-100 height-fit">
								<div class="flex flex-direction-col flex-gap-regular">
									<div class="flex flex-gap-regular">
										<div class="flex flex-gap-small flex-center-vertical flex-center-horizontal w-10">
											<div class="text-drop-card">3</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20">
											<div class="text-drop-card">13-01-2023</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-70">
											<div class="text-drop-card">Input Form NUP</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-direction-col flex-gap-regular">
						<div class="card w-100 height-fit">
							<div class="flex flex-direction-col flex-gap-large">
								<div class="flex flex-between-horizontal flex-center-vertical">
									<div class="title-card-dashboard">Approved NUP</div>
									<button class="btn-outline">Lihat Lebih</button>
								</div>
								<div class="flex flex-gap-regular">
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Kode Pengajuan</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10">
										<div class="text-drop-card">NUP</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Pemesan</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Marketing</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Tanggal</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Status</div>
										<img src="/images/icons/Arrow.svg">
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10">
										<div class="text-drop-card">Aksi</div>
									</div>
								</div>
							</div>
						</div>
						<div class="card w-100 height-fit">
							<div class="flex flex-direction-col flex-gap-regular">
								<div class="flex flex-gap-regular">
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">P003</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10">
										<div class="text-drop-card">70081</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Emma D’Arcy</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Dani Risnandar</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">14-01-2023</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-approve">Approve</div>
									</div>
									<div class="flex flex-gap-regular flex-center-vertical w-10">
										<img src="/images/icons/Edit.svg">
										<img src="/images/icons/Delete.svg">
									</div>
								</div>
							</div>
						</div>
						<div class="card w-100 height-fit">
							<div class="flex flex-direction-col flex-gap-regular">
								<div class="flex flex-gap-regular">
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">P003</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-10">
										<div class="text-drop-card">70081</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Emma D’Arcy</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">Dani Risnandar</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-drop-card">14-01-2023</div>
									</div>
									<div class="flex flex-gap-small flex-center-vertical w-15">
										<div class="text-approve">Approve</div>
									</div>
									<div class="flex flex-gap-regular flex-center-vertical w-10">
										<img src="/images/icons/Edit.svg">
										<img src="/images/icons/Delete.svg">
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