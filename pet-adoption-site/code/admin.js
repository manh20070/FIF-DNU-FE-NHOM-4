/* =============================================
   PETADOPT — admin.js  (trang quản trị)
   ============================================= */

let isLoggedIn = false;
let adminPetSearch = '';
let adoptionFilter = 'all';

/* -----------------------------------------------
   AUTH
----------------------------------------------- */
function checkAdmin() {
  const pw = document.getElementById('admin-pw').value;
  if (pw === 'admin123') {
    isLoggedIn = true;
    document.getElementById('admin-login-screen').style.display = 'none';
    document.getElementById('admin-dashboard').style.display    = 'block';
    document.getElementById('nav-status').textContent = '✅ Đã đăng nhập';
    document.getElementById('btn-logout').style.display = 'inline-block';
    refreshAll();
  } else {
    showToast('❌ Mật khẩu không đúng');
    document.getElementById('admin-pw').value = '';
    document.getElementById('admin-pw').focus();
  }
}

function logout() {
  isLoggedIn = false;
  document.getElementById('admin-login-screen').style.display = 'flex';
  document.getElementById('admin-dashboard').style.display    = 'none';
  document.getElementById('nav-status').textContent = 'Chưa đăng nhập';
  document.getElementById('btn-logout').style.display = 'none';
  document.getElementById('admin-pw').value = '';
}

/* -----------------------------------------------
   TAB SWITCHING
----------------------------------------------- */
function switchTab(tab) {
  ['pets','adoptions','add'].forEach(t => {
    document.getElementById(`tab-${t}`).style.display      = t === tab ? 'block' : 'none';
    document.getElementById(`tab-btn-${t}`).classList.toggle('active', t === tab);
  });
  if (tab === 'pets')      renderAdminPets();
  if (tab === 'adoptions') renderAdminAdoptions();
}

/* -----------------------------------------------
   SIDEBAR STATS
----------------------------------------------- */
function updateSidebarStats() {
  const pets      = loadPets();
  const adoptions = loadAdoptions();

  const available  = pets.filter(p => p.status === 'available').length;
  const pending    = pets.filter(p => p.status === 'pending').length;
  const adopted    = pets.filter(p => p.status === 'adopted').length;
  const newAdopts  = adoptions.filter(a => a.status === 'Đang xem xét').length;

  document.getElementById('s-available').textContent  = available;
  document.getElementById('s-pending').textContent    = pending;
  document.getElementById('s-adopted').textContent    = adopted;
  document.getElementById('s-new-adopt').textContent  = newAdopts;

  document.getElementById('badge-pets').textContent      = pets.length;
  document.getElementById('badge-adoptions').textContent = newAdopts > 0 ? newAdopts : adoptions.length;
  if (newAdopts > 0) {
    document.getElementById('badge-adoptions').classList.add('pending-badge');
  }
}

function refreshAll() {
  updateSidebarStats();
  renderAdminPets();
}

/* -----------------------------------------------
   RENDER DANH SÁCH THÚ CƯNG (ADMIN)
----------------------------------------------- */
function filterAdminPets(val) {
  adminPetSearch = val.toLowerCase();
  renderAdminPets();
}

function renderAdminPets() {
  const pets = loadPets();
  const speciesLabel = { dog:'🐶 Chó', cat:'🐱 Mèo', rabbit:'🐰 Thỏ', bird:'🦜 Chim', other:'🐹 Khác' };
  const div = document.getElementById('admin-pets-content');

  const filtered = adminPetSearch
    ? pets.filter(p => p.name.toLowerCase().includes(adminPetSearch) || p.breed.toLowerCase().includes(adminPetSearch))
    : pets;

  if (!filtered.length) {
    div.innerHTML = `<div class="empty-state"><span class="empty-icon">🔍</span><p>Không tìm thấy thú cưng</p></div>`;
    return;
  }

  div.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Thú cưng</th>
            <th>Loài</th>
            <th>Tuổi</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map(p => {
            const [cls, lbl] = getStatusLabel(p.status);
            return `
              <tr>
                <td>
                  <div style="display:flex;align-items:center;gap:10px;">
                    <span style="font-size:1.8rem;line-height:1;">${p.emoji}</span>
                    <div>
                      <strong style="color:var(--brown-dark)">${p.name}</strong>
                      <div style="font-size:0.78rem;color:var(--text-muted)">${p.breed}</div>
                    </div>
                  </div>
                </td>
                <td>${speciesLabel[p.species] || p.species}</td>
                <td>${p.age}</td>
                <td>
                  <span class="status-badge ${cls}" style="position:static;display:inline-block;font-size:0.72rem;">${lbl}</span>
                </td>
                <td>
                  <div class="action-group">
                    <button class="action-btn btn-edit"    onclick="changeStatus(${p.id},'available')" title="Đánh dấu còn trống">✅</button>
                    <button class="action-btn btn-pending" onclick="changeStatus(${p.id},'pending')"   title="Đánh dấu đang chờ">⏳</button>
                    <button class="action-btn btn-approve" onclick="changeStatus(${p.id},'adopted')"   title="Đánh dấu đã nhận nuôi">🏠</button>
                    <button class="action-btn btn-delete"  onclick="confirmDelete(${p.id},'${p.name}')" title="Xóa">🗑</button>
                  </div>
                </td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

/* -----------------------------------------------
   RENDER ĐƠN NHẬN NUÔI (ADMIN)
----------------------------------------------- */
function filterAdoptions(val) {
  adoptionFilter = val;
  renderAdminAdoptions();
}

function renderAdminAdoptions() {
  const adoptions = loadAdoptions();
  const div = document.getElementById('admin-adoptions-content');

  const filtered = adoptionFilter === 'all'
    ? adoptions
    : adoptions.filter(a => a.status === adoptionFilter);

  if (!filtered.length) {
    div.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📋</span>
        <p>${adoptions.length === 0 ? 'Chưa có đơn đăng ký nào' : 'Không có đơn nào khớp'}</p>
      </div>`;
    return;
  }

  div.innerHTML = `
    <div class="admin-table-wrap">
      <table class="admin-table">
        <thead>
          <tr>
            <th>Người đăng ký</th>
            <th>Thú cưng</th>
            <th>Liên hệ</th>
            <th>Nhà ở</th>
            <th>Kinh nghiệm</th>
            <th>Ngày</th>
            <th>Trạng thái</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          ${filtered.map((a) => {
            const allAdoptions = loadAdoptions();
            const realIdx = allAdoptions.findIndex(x => x.id === a.id);
            return `
              <tr>
                <td>
                  <strong>${a.applicant}</strong><br>
                  <small style="color:var(--text-muted)">${a.email}</small>
                </td>
                <td><strong>${a.petName}</strong></td>
                <td>${a.phone}</td>
                <td>${a.house}</td>
                <td>${a.experience}</td>
                <td style="white-space:nowrap">${a.date}</td>
                <td>
                  <select class="status-select"
                    onchange="updateAdoptionStatus(${a.id}, this.value)"
                    style="padding:5px 8px;border-radius:8px;border:1.5px solid var(--border);font-size:0.82rem;font-family:'DM Sans',sans-serif;background:var(--cream);cursor:pointer;">
                    <option ${a.status === 'Đang xem xét' ? 'selected' : ''} value="Đang xem xét">⏳ Đang xem xét</option>
                    <option ${a.status === 'Đã duyệt'     ? 'selected' : ''} value="Đã duyệt">✅ Đã duyệt</option>
                    <option ${a.status === 'Từ chối'       ? 'selected' : ''} value="Từ chối">❌ Từ chối</option>
                  </select>
                </td>
                <td>
                  <button class="action-btn btn-delete" onclick="confirmDeleteAdoption(${a.id}, '${a.applicant}')" title="Xóa đơn">🗑</button>
                </td>
              </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>`;
}

/* -----------------------------------------------
   CẬP NHẬT TRẠNG THÁI ĐƠN NHẬN NUÔI
----------------------------------------------- */
function updateAdoptionStatus(adoptionId, newStatus) {
  const adoptions = loadAdoptions();
  const idx = adoptions.findIndex(a => a.id === adoptionId);
  if (idx === -1) return;

  const adoption = adoptions[idx];
  adoption.status = newStatus;

  /* Nếu duyệt → chuyển thú cưng sang 'adopted' */
  if (newStatus === 'Đã duyệt') {
    const pets = loadPets();
    const pet = pets.find(p => p.id === adoption.petId);
    if (pet) {
      pet.status = 'adopted';
      savePets(pets);
    }
    showToast(`✅ Đã duyệt đơn của ${adoption.applicant} — ${adoption.petName} đã có mái ấm!`);
  }
  /* Nếu từ chối → chuyển thú cưng về 'available' nếu đang pending */
  else if (newStatus === 'Từ chối') {
    const pets = loadPets();
    const pet = pets.find(p => p.id === adoption.petId);
    /* Chỉ trả về available nếu không còn đơn đang xem xét nào khác cho con thú này */
    const otherPending = adoptions.filter((a, i) => i !== idx && a.petId === adoption.petId && a.status === 'Đang xem xét');
    if (pet && pet.status === 'pending' && otherPending.length === 0) {
      pet.status = 'available';
      savePets(pets);
    }
    showToast(`❌ Đã từ chối đơn của ${adoption.applicant}`);
  } else {
    showToast(`⏳ Đã cập nhật trạng thái đơn của ${adoption.applicant}`);
  }

  saveAdoptions(adoptions);
  updateSidebarStats();
  renderAdminAdoptions();
}

/* -----------------------------------------------
   ĐỔI TRẠNG THÁI THÚ CƯNG
----------------------------------------------- */
function changeStatus(id, status) {
  const pets = loadPets();
  const pet = pets.find(p => p.id === id);
  if (!pet) return;
  pet.status = status;
  savePets(pets);
  updateSidebarStats();
  renderAdminPets();
  showToast(`✅ Đã cập nhật trạng thái ${pet.name} → ${status}`);
}

/* -----------------------------------------------
   XÓA THÚ CƯNG
----------------------------------------------- */
function confirmDelete(id, name) {
  document.getElementById('confirm-icon').textContent  = '🗑';
  document.getElementById('confirm-title').textContent = `Xóa ${name}?`;
  document.getElementById('confirm-msg').textContent   = `Bạn có chắc muốn xóa ${name} khỏi danh sách? Hành động này không thể hoàn tác.`;
  document.getElementById('confirm-ok').onclick        = () => { deletePet(id); closeConfirm(); };
  document.getElementById('confirm-overlay').style.display = 'flex';
}

function deletePet(id) {
  const pets = loadPets();
  const idx = pets.findIndex(p => p.id === id);
  if (idx === -1) return;
  const name = pets[idx].name;
  pets.splice(idx, 1);
  savePets(pets);
  updateSidebarStats();
  renderAdminPets();
  showToast(`🗑 Đã xóa ${name}`);
}

/* -----------------------------------------------
   XÓA ĐƠN NHẬN NUÔI
----------------------------------------------- */
function confirmDeleteAdoption(adoptionId, applicant) {
  document.getElementById('confirm-icon').textContent  = '📋';
  document.getElementById('confirm-title').textContent = `Xóa đơn của ${applicant}?`;
  document.getElementById('confirm-msg').textContent   = 'Đơn sẽ bị xóa vĩnh viễn.';
  document.getElementById('confirm-ok').onclick        = () => { deleteAdoption(adoptionId); closeConfirm(); };
  document.getElementById('confirm-overlay').style.display = 'flex';
}

function deleteAdoption(adoptionId) {
  const adoptions = loadAdoptions();
  const idx = adoptions.findIndex(a => a.id === adoptionId);
  if (idx === -1) return;
  const name = adoptions[idx].applicant;
  adoptions.splice(idx, 1);
  saveAdoptions(adoptions);
  updateSidebarStats();
  renderAdminAdoptions();
  showToast(`🗑 Đã xóa đơn của ${name}`);
}

/* -----------------------------------------------
   THÊM THÚ CƯNG MỚI
----------------------------------------------- */
function addPet() {
  const name  = document.getElementById('a-name').value.trim();
  const breed = document.getElementById('a-breed').value.trim();

  if (!name || !breed) {
    showToast('⚠️ Vui lòng điền tên và giống');
    return;
  }

  const BG_OPTIONS = ['bg-orange','bg-yellow','bg-pink','bg-blue','bg-green','bg-purple','bg-teal'];
  const pets = loadPets();
  const maxId = pets.length > 0 ? Math.max(...pets.map(p => p.id)) : 0;

  const rawTags = document.getElementById('a-tags').value.trim();
  const tags = rawTags ? rawTags.split(',').map(t => t.trim()).filter(Boolean) : ['Mới thêm'];

  const newPet = {
    id:      maxId + 1,
    name,
    breed,
    species: document.getElementById('a-species').value,
    age:     document.getElementById('a-age').value   || 'Không rõ',
    gender:  document.getElementById('a-gender').value,
    size:    document.getElementById('a-size').value,
    color:   document.getElementById('a-color').value || 'Nhiều màu',
    emoji:   document.getElementById('a-emoji').value || '🐾',
    bg:      BG_OPTIONS[Math.floor(Math.random() * BG_OPTIONS.length)],
    status:  'available',
    desc:    document.getElementById('a-desc').value  || 'Thú cưng đang tìm kiếm mái ấm mới.',
    tags,
  };

  pets.unshift(newPet);
  savePets(pets);
  showToast(`✅ Đã thêm ${name} thành công!`);
  updateSidebarStats();

  /* Reset form */
  ['a-name','a-breed','a-age','a-color','a-emoji','a-desc','a-tags'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('a-emoji').value = '🐾';

  /* Chuyển sang tab pets để xem kết quả */
  switchTab('pets');
}

/* -----------------------------------------------
   CONFIRM DIALOG
----------------------------------------------- */
function closeConfirm() {
  document.getElementById('confirm-overlay').style.display = 'none';
}

document.getElementById('confirm-overlay').addEventListener('click', function(e) {
  if (e.target === this) closeConfirm();
});

/* -----------------------------------------------
   PHÍM TẮT: Enter trong ô mật khẩu
----------------------------------------------- */
document.getElementById('admin-pw').addEventListener('keydown', function(e) {
  if (e.key === 'Enter') checkAdmin();
});
