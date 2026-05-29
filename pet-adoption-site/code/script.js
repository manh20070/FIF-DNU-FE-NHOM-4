/* =============================================
   PETADOPT — app.js  (trang chính, người dùng)
   ============================================= */

/* Tải dữ liệu từ sessionStorage (hoặc mặc định) */
let PETS = loadPets();
let adoptions = loadAdoptions();

let currentFilter = 'all';
let currentSearch = '';
let selectedPet   = null;
let modalView     = 'detail'; /* 'detail' | 'form' | 'success' */

/* -----------------------------------------------
   KHỞI TẠO
----------------------------------------------- */
function init() {
  PETS = loadPets();
  adoptions = loadAdoptions();
  updateStats();
  renderGrid(getFilteredPets());
}

function updateStats() {
  const available = PETS.filter(p => p.status === 'available').length;
  const adopted   = PETS.filter(p => p.status === 'adopted').length;
  document.getElementById('stat-available').textContent = available;
  document.getElementById('stat-adopted').textContent   = adopted;
}

/* -----------------------------------------------
   RENDER PET GRID
----------------------------------------------- */
function renderGrid(pets) {
  PETS = loadPets(); // luôn tải mới nhất
  const filtered = pets !== undefined ? pets : getFilteredPets();
  const grid = document.getElementById('pet-grid');
  document.getElementById('result-count').textContent = `Hiển thị ${filtered.length} thú cưng`;

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span class="empty-icon">🔍</span>
        <p>Không tìm thấy thú cưng phù hợp</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(p => {
    const [cls, label] = getStatusLabel(p.status);
    const canAdopt = p.status === 'available';

    return `
      <div class="pet-card" onclick="openPet(${p.id})">
        <div class="pet-photo ${p.bg}">
          <div class="pet-photo-bg">${p.emoji}</div>
          <div class="status-badge ${cls}">${label}</div>
        </div>
        <div class="pet-info">
          <div class="pet-name">${p.name}</div>
          <div class="pet-breed">${p.breed}</div>
          <div class="pet-meta">
            <span class="pet-meta-item">🕐 ${p.age}</span>
            <span class="pet-meta-item">${p.gender === 'Đực' ? '♂' : '♀'} ${p.gender}</span>
            <span class="pet-meta-item">📏 ${p.size}</span>
          </div>
          <div class="pet-desc">${p.desc}</div>
          <div class="pet-tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
          <button
            class="btn-adopt ${canAdopt ? 'btn-adopt-primary' : p.status === 'pending' ? 'btn-adopt-secondary' : 'btn-adopt-disabled'}"
            onclick="event.stopPropagation(); ${canAdopt ? `openAdoptForm(${p.id})` : ''}">
            ${canAdopt
              ? '💛 Nhận nuôi ngay'
              : p.status === 'pending'
                ? '⏳ Đang xử lý đơn'
                : '🏠 Đã có gia đình'}
          </button>
        </div>
      </div>`;
  }).join('');
}

/* -----------------------------------------------
   FILTER & SEARCH
----------------------------------------------- */
function getFilteredPets() {
  PETS = loadPets();
  let pets = PETS;
  switch (currentFilter) {
    case 'dog':       pets = pets.filter(p => p.species === 'dog');       break;
    case 'cat':       pets = pets.filter(p => p.species === 'cat');       break;
    case 'rabbit':    pets = pets.filter(p => p.species === 'rabbit');    break;
    case 'bird':      pets = pets.filter(p => p.species === 'bird');      break;
    case 'other':     pets = pets.filter(p => p.species === 'other');     break;
    case 'available': pets = pets.filter(p => p.status === 'available');  break;
    case 'young':     pets = pets.filter(p => p.age.includes('tháng') || p.age.includes('1 năm')); break;
  }
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    pets = pets.filter(p => p.name.toLowerCase().includes(q) || p.breed.toLowerCase().includes(q));
  }
  return pets;
}

function filterPets(filter, el) {
  currentFilter = filter;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  el.classList.add('active');
  renderGrid(getFilteredPets());
}

function searchPets(value) {
  currentSearch = value;
  renderGrid(getFilteredPets());
}

function scrollToGrid() {
  document.getElementById('pet-grid').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* -----------------------------------------------
   MODAL — CHI TIẾT THÚ CƯNG
----------------------------------------------- */
function openPet(id) {
  PETS = loadPets();
  selectedPet = PETS.find(p => p.id === id);
  if (!selectedPet) return;
  modalView = 'detail';
  renderModal();
  document.getElementById('modal-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function openAdoptForm(id) {
  PETS = loadPets();
  selectedPet = PETS.find(p => p.id === id);
  if (!selectedPet) return;
  modalView = 'form';
  renderModal();
  document.getElementById('modal-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

function renderModal() {
  const p  = selectedPet;
  const [cls, label] = getStatusLabel(p.status);
  const mc = document.getElementById('modal-content');

  if (modalView === 'detail') {
    mc.innerHTML = `
      <div class="modal-body">
        <div class="modal-photo ${p.bg}" style="border-radius:24px 0 0 24px;">
          <div>${p.emoji}</div>
        </div>
        <div class="modal-info">
          <div style="margin-bottom:12px;">
            <span class="status-badge ${cls}" style="position:static;display:inline-block;">${label}</span>
          </div>
          <div class="modal-name">${p.name}</div>
          <div class="modal-breed">${p.breed}</div>
          <div class="modal-details">
            <div class="detail-item"><div class="detail-label">Tuổi</div><div class="detail-value">${p.age}</div></div>
            <div class="detail-item"><div class="detail-label">Giới tính</div><div class="detail-value">${p.gender}</div></div>
            <div class="detail-item"><div class="detail-label">Kích thước</div><div class="detail-value">${p.size}</div></div>
            <div class="detail-item"><div class="detail-label">Màu lông</div><div class="detail-value">${p.color}</div></div>
          </div>
          <p class="modal-desc">${p.desc}</p>
          <div class="pet-tags" style="margin-bottom:1.5rem;">
            ${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}
          </div>
          ${p.status === 'available'
            ? `<button class="btn-submit" onclick="modalView='form'; renderModal()">
                 💛 Đăng ký nhận nuôi ${p.name}
               </button>`
            : p.status === 'pending'
              ? `<div style="background:#FFF8E8;border:1.5px solid #F0C96A;border-radius:12px;padding:14px 18px;text-align:center;color:#856A20;font-weight:600;">
                   ⏳ Đang xử lý đơn nhận nuôi
                 </div>`
              : `<div style="background:var(--sage-pale);border:1.5px solid var(--sage-light);border-radius:12px;padding:14px 18px;text-align:center;color:var(--sage);font-weight:600;">
                   🏠 ${p.name} đã có mái ấm mới rồi!
                 </div>`
          }
        </div>
      </div>`;

  } else if (modalView === 'form') {
    mc.innerHTML = `
      <div style="padding:2.5rem;" class="adopt-form">
        <button class="btn-back" onclick="modalView='detail'; renderModal()">← Quay lại</button>
        <div class="form-title">📋 Đăng ký nhận nuôi ${p.name}</div>
        <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:1.5rem;line-height:1.6;">
          Vui lòng điền đầy đủ thông tin. Chúng tôi sẽ liên hệ để xác nhận trong vòng 24–48 giờ.
        </p>
        <div class="form-row">
          <div class="form-group"><label>Họ và tên *</label><input type="text" id="f-name" placeholder="Nguyễn Văn An"></div>
          <div class="form-group"><label>Số điện thoại *</label><input type="tel" id="f-phone" placeholder="0912 345 678"></div>
        </div>
        <div class="form-group"><label>Email</label><input type="email" id="f-email" placeholder="email@example.com"></div>
        <div class="form-row">
          <div class="form-group"><label>Địa chỉ sống</label><input type="text" id="f-addr" placeholder="Quận/Huyện, Tỉnh/TP"></div>
          <div class="form-group">
            <label>Loại nhà ở</label>
            <select id="f-house">
              <option>Nhà riêng có sân</option>
              <option>Chung cư</option>
              <option>Nhà trọ</option>
              <option>Biệt thự</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label>Kinh nghiệm nuôi thú cưng</label>
          <select id="f-exp">
            <option>Chưa từng nuôi</option>
            <option>1–2 năm</option>
            <option>3–5 năm</option>
            <option>Trên 5 năm</option>
          </select>
        </div>
        <div class="form-group">
          <label>Lý do muốn nhận nuôi ${p.name}</label>
          <textarea id="f-reason" placeholder="Hãy chia sẻ về môi trường sống và lý do bạn muốn nhận nuôi..."></textarea>
        </div>
        <button class="btn-submit" onclick="submitAdopt()">🐾 Gửi đơn đăng ký</button>
      </div>`;

  } else if (modalView === 'success') {
    mc.innerHTML = `
      <div style="padding:3rem;" class="adopt-form">
        <div class="success-box">
          <span class="success-icon">🎉</span>
          <h3>Đăng ký thành công!</h3>
          <p>
            Chúng tôi đã nhận được đơn của bạn cho <strong>${p.name}</strong>.<br>
            Trạng thái sẽ được cập nhật thành <em>"Đang chờ"</em> và chúng tôi sẽ liên hệ trong 24–48 giờ.
          </p>
          <button class="btn-submit" style="margin-top:1.5rem;" onclick="closeModal()">Về trang chủ</button>
        </div>
      </div>`;
  }
}

function submitAdopt() {
  const name  = document.getElementById('f-name')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();

  if (!name || !phone) {
    showToast('⚠️ Vui lòng điền tên và số điện thoại');
    return;
  }

  adoptions = loadAdoptions();
  adoptions.push({
    id:         Date.now(),
    petId:      selectedPet.id,
    petName:    selectedPet.name,
    applicant:  name,
    phone,
    email:      document.getElementById('f-email')?.value  || '',
    address:    document.getElementById('f-addr')?.value   || '',
    house:      document.getElementById('f-house')?.value  || '',
    experience: document.getElementById('f-exp')?.value    || '',
    reason:     document.getElementById('f-reason')?.value || '',
    date:       new Date().toLocaleDateString('vi-VN'),
    status:     'Đang xem xét',
  });
  saveAdoptions(adoptions);

  /* Đổi trạng thái thú cưng → pending */
  PETS = loadPets();
  const pet = PETS.find(p => p.id === selectedPet.id);
  if (pet) {
    pet.status = 'pending';
    selectedPet.status = 'pending';
    savePets(PETS);
  }

  modalView = 'success';
  renderModal();
  updateStats();
  renderGrid(getFilteredPets());
}

/* -----------------------------------------------
   KHỞI CHẠY
----------------------------------------------- */
init();
