<script type="text/javascript">
	import Sidebar from '../../../components/sidebar.svelte'
	import Navbar from '../../../components/navbar.svelte'
	import { onMount } from 'svelte';
	import {fly, scale} from 'svelte/transition'
	import ApiController from '../../../ApiController';

	let approvalList = null;
	let approvalModal = 0;
	let jenis_surat = null;
	let id_surat = null;
	let data_sign = null;

	let getApprovalList = () => {
		ApiController({
			method: "GET",
			endpoint: `approval`
		}).then(response => {
			approvalList = response.data.data.approval;
			console.log(approvalList)
		})
	}

	let setSign = (jenis, id) => {
		jenis_surat = jenis
		id_surat = id
		data_sign = {id_tanda_tangan : id}
	}
	
	onMount(() => {
		getApprovalList()
	})
	
</script>

<div id="after-login-layout">
	{#if approvalModal == 1}
		<div class="modal-backdrop">
			<div class="flex flex-center-vertical flex-center-horizontal h-100">
				<div class="card-2 flex flex-direction-col flex-gap-regular w-30" in:fly={{ y: -20, duration: 600 }} out:fly={{ y: -20, duration: 600 }}>
					<div class="title-modal">Approval</div>
					<div class="desc-modal w-100">Anda akan melakukan Approval permohonan ini. Silahkan cek kembali kelengkapan dan keabsahan data sebelum melakukan Approval.</div>
					<div class="flex w-100 flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small flex-center-horizontal w-33" on:click={() => {
							approvalModal = 0;
						}}><span>Tutup</span></button>
						<button class="btn-fill-danger flex flex-center-vertical flex-gap-small flex-center-horizontal w-33" on:click={() => {
							ApiController({
								method: "POST",
								endpoint: `approval/${jenis_surat}/${id_surat}/reject`,
								datas: data_sign
							}).then(response => {
								approvalModal = 2
							})
						}}><span>Reject</span></button>
						<button class="btn-fill-primary flex flex-center-vertical flex-gap-small flex-center-horizontal w-33" on:click={() => {
							ApiController({
								method: "POST",
								endpoint: `approval/${jenis_surat}/${id_surat}/approve`,
								datas: data_sign
							}).then(response => {
								approvalModal = 2
							})
						}}><span>Approve</span></button>
					</div>
				</div>
			</div>
		</div>
	{/if}
	{#if approvalModal == 2}
		<div class="modal-backdrop">
			<div class="flex flex-center-vertical flex-center-horizontal h-100">
				<div class="card-2 flex flex-direction-col flex-gap-regular w-30" in:fly={{ y: -20, duration: 600 }} out:fly={{ y: -20, duration: 600 }}>
					<div class="title-modal">Berhasil</div>
					<div class="desc-modal w-100">Aksi telah berhasil dilakukan!</div>
					<div class="flex w-100 flex-gap-regular">
						<button class="btn-outline flex flex-center-vertical flex-gap-small flex-center-horizontal w-100" on:click={() => {
							approvalModal = 0;
							window.location.href = '/super-admin/approval'
						}}><span>Tutup</span></button>
					</div>
				</div>
			</div>
		</div>
	{/if}
	<Navbar/>
	<div class="flex">
		<Sidebar statusPointer="Approval" pagePointer="admin"/>
		<div class="flex flex-direction-col flex-gap-large w-80 content">
			<div class="flex flex-direction-col flex-gap-semi-large w-90">
				<div class="flex flex-between-horizontal">
					<div class="title-notif-approval">Approval</div>
					<a href="/super-admin/approval/kelola-ttd" class="no-decor"><button class="btn-fill flex flex-center-vertical flex-gap-small"> <span>Kelola Tanda Tangan</span></button></a>
				</div>
				<div class="flex flex-direction-col flex-gap-regular">
					<div class="card-head height-fit">
						<div class="flex">
							<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
								<div class="text-drop-card">Tipe Approval</div>
								<img src="/images/icons/Arrow.svg">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
								<div class="text-drop-card">Tanggal Masuk</div>
								<img src="/images/icons/Arrow.svg">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
								<div class="text-drop-card">Oleh</div>
								<img src="/images/icons/Arrow.svg">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-20 border-separate">
								<div class="text-drop-card">Lampiran Surat</div>
								<img src="/images/icons/Arrow.svg">
							</div>
							<div class="flex flex-gap-small flex-center-vertical w-20 border-non-separate">
								<div class="text-drop-card">Status</div>
								<img src="/images/icons/Arrow.svg">
							</div>
							<!-- <div class="flex flex-gap-small flex-center-vertical w-10 border-non-separate">
								<div class="text-drop-card">Aksi</div>
								<img src="/images/icons/Arrow.svg">
							</div> -->
						</div>
					</div>
					{#if approvalList}
						{#each approvalList as item, index}
							<div class="card-head height-fit">
								<a href="/super-admin/approval/detail-approval/{item.tipe_approval}/{item.id}" class="no-decor">
									<div class="flex">
										<div class="flex flex-gap-small flex-center-vertical no-border-table w-20">
											<div class="text-drop-card">{item.tipe_approval}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<div class="text-drop-card">{item.tanggal_masuk.slice(0,10)}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<div class="text-drop-card">{item.oleh}</div>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">
											<a href="{item.lampiran_surat}" class="no-decor w-100"><div class="text-drop-card">{item.lampiran_surat}</div></a>
										</div>
										<div class="flex flex-gap-small flex-center-vertical w-20 no-border-table">

											{#if item.status_approval == "approved" || item.status == "approved"}
												<div class="text-approve">Approved</div>
											{:else if item.status_approval == "pending" || item.status == "pending"}
												<div class="text-pending">Pending</div>
											{:else if item.status_approval == "rejected" || item.status == "rejected"}
												<div class="text-reject">Rejected</div>
											{/if}
										</div>
										<!-- <div class="flex flex-gap-small flex-center-vertical w-10 no-border-table">
											{#if item.status_approval == "approved" || item.status == "approved" || item.status_approval == "rejected" || item.status == "rejected"}
												<div class="text-pending">Unavailable</div>
											{:else if item.status_approval == "pending" || item.status == "pending"}
												<div class="link-detail-akun" on:click={()=>{
													setSign(item.tipe_approval,item.id)
													approvalModal = 1;
												}}>Approve</div>
											{/if}
										</div> -->
									</div>
								</a>
							</div>
						{/each}
					{/if}
				</div>
				<div class="card w-100 height-fit">
					<div class="flex flex-between-horizontal">
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-display-sort">Menampilkan</div>
							<select class="select-sort">
								<option>10</option>
							</select>
							<div class="text-display-sort">dari <span class="bold-number">{#if approvalList}
								{approvalList.length}
							{/if}</span> Notifikasi</div>
						</div>
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Left.svg"></div>
							<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><div class="text-display-sort bold-number">1</div></div>
							<div class="flex flex-center-vertical flex-center-horizontal border-pagination"><img src="/images/icons/Arrow_Right.svg"></div>
						</div>
					</div>
				</div>
			</div>
			<div class="flex flex-direction-col flex-gap-semi-large w-90">
				<div class="flex flex-direction-col flex-gap-small">
					<div class="title-notif-approval">Notifikasi Approval</div>
					<div class="flex flex-direction-col flex-gap-small">
						<div class="flex flex-gap-regular">
							<span class="active-notif-button">Belum Dibaca</span>
							<span class="unactive-notif-button">Sudah Dibaca</span>
						</div>
					</div>
				</div>
				<div class="flex flex-direction-col flex-gap-regular" in:fly={{ y: -20, duration: 600 }}>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
					<div class="card flex flex-direction-col flex-gap-small w-100">
						<div class="flex flex-between-horizontal">
							<span class="text-notif">Dari Sistem</span>
							<span class="text-notif">08 : 00</span>
						</div>
							<span class="text-notif-bold">NUP telah di approve oleh HO</span>
							<div class="text-notif-desc">NUP 70081 telah di approve oleh HO. Silahkan cek kembali data NUP tersebut sebelum melakukan Approval. </div>
					</div>
				</div>
				<div class="card w-100 height-fit">
					<div class="flex flex-between-horizontal">
						<div class="flex flex-gap-regular flex-center-vertical">
							<div class="text-display-sort">Menampilkan</div>
							<select class="select-sort">
								<option>10</option>
							</select>
							<div class="text-display-sort">dari <span class="bold-number">3</span> Notifikasi</div>
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