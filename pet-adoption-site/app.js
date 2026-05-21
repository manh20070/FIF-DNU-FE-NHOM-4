    /* =============================================
   PETADOPT — app.js
   ============================================= */


/* ==============================================
   DATA — DANH SÁCH THÚ CƯNG
   ============================================== */
const PETS = [
  {
    id: 1, name: 'Mochi', breed: 'Poodle Trắng', species: 'dog',
    age: '2 năm', gender: 'Đực', size: 'Nhỏ', color: 'Trắng tuyết',
    emoji: '🐩', bg: 'bg-gray', status: 'available',
    desc: 'Mochi cực kỳ thân thiện và thông minh. Cậu bé yêu trẻ em và thích chơi. Đã tiêm đầy đủ vaccine.',
    tags: ['Thân thiện', 'Đã tiêm', 'Sạch bóng']
  },
  {
    id: 2, name: 'Luna', breed: 'Mèo Anh Lông Ngắn', species: 'cat',
    age: '3 năm', gender: 'Cái', size: 'Trung', color: 'Xám xanh',
    emoji: '😺', bg: 'bg-blue', status: 'available',
    desc: 'Luna là quý cô điềm đạm, thích nằm sưởi nắng và được vuốt ve. Phù hợp sống căn hộ nhỏ.',
    tags: ['Điềm tĩnh', 'Sạch sẽ', 'Trong nhà']
  },
  {
    id: 3, name: 'Coco', breed: 'Chihuahua', species: 'dog',
    age: '1 năm', gender: 'Cái', size: 'Rất nhỏ', color: 'Nâu vàng',
    emoji: '🐕', bg: 'bg-orange', status: 'pending',
    desc: 'Coco nhỏ nhắn nhưng đầy năng lượng! Cô bé rất dũng cảm và thích khám phá mọi thứ.',
    tags: ['Năng động', 'Dũng cảm', 'Hay chơi']
  },
  {
    id: 4, name: 'Buddy', breed: 'Golden Retriever', species: 'dog',
    age: '4 năm', gender: 'Đực', size: 'Lớn', color: 'Vàng kim',
    emoji: '🦮', bg: 'bg-yellow', status: 'available',
    desc: 'Buddy là người bạn hoàn hảo cho gia đình. Thích chạy nhảy ngoài trời và bơi lội.',
    tags: ['Trung thành', 'Gia đình', 'Hoạt động']
  },
  {
    id: 5, name: 'Miu', breed: 'Mèo Ragdoll', species: 'cat',
    age: '8 tháng', gender: 'Cái', size: 'Trung', color: 'Trắng kem',
    emoji: '🐈', bg: 'bg-pink', status: 'available',
    desc: 'Miu ngoan ngoãn như búp bê, thích được bế và không bao giờ cào cấu.',
    tags: ['Ngoan ngoãn', 'Dịu dàng', 'Bé nhỏ']
  },
  {
    id: 6, name: 'Tai', breed: 'Thỏ Hà Lan', species: 'rabbit',
    age: '1 năm', gender: 'Đực', size: 'Nhỏ', color: 'Trắng đen',
    emoji: '🐰', bg: 'bg-gray', status: 'available',
    desc: 'Tai rất thông minh, có thể học được nhiều trò. Thích ăn rau xanh và được chơi đùa.',
    tags: ['Thông minh', 'Đáng yêu', 'Sạch']
  },
  {
    id: 7, name: 'Rex', breed: 'German Shepherd', species: 'dog',
    age: '5 năm', gender: 'Đực', size: 'Lớn', color: 'Đen nâu',
    emoji: '🐕‍🦺', bg: 'bg-brown', status: 'available',
    desc: 'Rex được huấn luyện chuyên nghiệp. Trung thành, bảo vệ tốt. Cần người có kinh nghiệm nuôi chó lớn.',
    tags: ['Đã huấn luyện', 'Bảo vệ', 'Trung thành']
  },
  {
    id: 8, name: 'Kiwi', breed: 'Vẹt Budgerigar', species: 'bird',
    age: '2 năm', gender: 'Đực', size: 'Rất nhỏ', color: 'Xanh lá',
    emoji: '🦜', bg: 'bg-green', status: 'available',
    desc: 'Kiwi hót hay và có thể bắt chước tiếng người. Vui tính, thích giao tiếp.',
    tags: ['Biết nói', 'Vui vẻ', 'Thân thiện']
  },
  {
    id: 9, name: 'Pearl', breed: 'Mèo Ba Tư', species: 'cat',
    age: '6 năm', gender: 'Cái', size: 'Trung', color: 'Trắng',
    emoji: '🐱', bg: 'bg-pink', status: 'adopted',
    desc: 'Pearl đã tìm được mái ấm mới! Cô bé sống hạnh phúc với gia đình mới của mình.',
    tags: ['Đã nhận nuôi', 'Hạnh phúc']
  },
  {
    id: 10, name: 'Dũng', breed: 'Chó Phú Quốc', species: 'dog',
    age: '3 năm', gender: 'Đực', size: 'Trung', color: 'Vàng',
    emoji: '🐶', bg: 'bg-orange', status: 'available',
    desc: 'Dũng là giống chó Việt Nam thuần chủng, thông minh và rất trung thành với chủ.',
    tags: ['Thuần Việt', 'Thông minh', 'Khỏe mạnh']
  },
  {
    id: 11, name: 'Bông', breed: 'Mèo Munchkin', species: 'cat',
    age: '1 năm', gender: 'Cái', size: 'Nhỏ', color: 'Cam trắng',
    emoji: '🐾', bg: 'bg-orange', status: 'pending',
    desc: 'Bông đặc biệt với đôi chân ngắn xinh xắn. Cực kỳ hiếu động và hay chơi đùa suốt ngày.',
    tags: ['Đặc biệt', 'Hiếu động', 'Đáng yêu']
  },
  {
    id: 12, name: 'Max', breed: 'Husky Siberia', species: 'dog',
    age: '2 năm', gender: 'Đực', size: 'Lớn', color: 'Đen trắng',
    emoji: '🐺', bg: 'bg-blue', status: 'available',
    desc: 'Max có đôi mắt xanh huyền bí, lanh lợi và thích hoạt động ngoài trời. Cần không gian rộng.',
    tags: ['Năng động', 'Đẹp trai', 'Ngoài trời']
  },
  {
    id: 13, name: 'Hạnh', breed: 'Chuột Lang', species: 'other',
    age: '6 tháng', gender: 'Cái', size: 'Rất nhỏ', color: 'Nâu trắng',
    emoji: '🐹', bg: 'bg-brown', status: 'available',
    desc: 'Hạnh nhỏ nhắn và dễ thương. Phù hợp cho trẻ em làm quen với việc chăm sóc thú cưng.',
    tags: ['Nhỏ gọn', 'Phù hợp trẻ em', 'Dễ nuôi']
  },
  {
    id: 14, name: 'Lily', breed: 'Mèo Scottish Fold', species: 'cat',
    age: '4 năm', gender: 'Cái', size: 'Trung', color: 'Xám vàng',
    emoji: '😸', bg: 'bg-yellow', status: 'available',
    desc: 'Lily với đôi tai gập đặc trưng. Bình tĩnh, quan sát mọi thứ và thích sống yên tĩnh.',
    tags: ['Đặc biệt', 'Bình tĩnh', 'Trưởng thành']
  },
  {
    id: 15, name: 'Rio', breed: 'Vẹt Cockatiel', species: 'bird',
    age: '3 năm', gender: 'Đực', size: 'Nhỏ', color: 'Xám vàng',
    emoji: '🐦', bg: 'bg-yellow', status: 'available',
    desc: 'Rio thích được âu yếm và hót rất hay. Có thể học huýt sáo các bài hát đơn giản.',
    tags: ['Biết hát', 'Thân thiện', 'Dễ nuôi']
  },
  {
    id: 16, name: 'Kẹo', breed: 'Chó Corgi', species: 'dog',
    age: '1 năm', gender: 'Cái', size: 'Nhỏ', color: 'Vàng trắng',
    emoji: '🐕', bg: 'bg-yellow', status: 'pending',
    desc: 'Kẹo đáng yêu với cái đuôi ngắn ngộ nghĩnh. Rất thông minh và dễ huấn luyện.',
    tags: ['Thông minh', 'Đáng yêu', 'Trẻ']
  },
  {
    id: 17, name: 'Shadow', breed: 'Mèo Đen Thuần', species: 'cat',
    age: '5 năm', gender: 'Đực', size: 'Trung', color: 'Đen',
    emoji: '🐈‍⬛', bg: 'bg-gray', status: 'available',
    desc: 'Shadow huyền bí và độc lập. Thích sống tự do nhưng vẫn trung thành với chủ của mình.',
    tags: ['Độc lập', 'Huyền bí', 'Trung thành']
  },
  {
    id: 18, name: 'Đậu', breed: 'Thỏ Angora', species: 'rabbit',
    age: '2 năm', gender: 'Cái', size: 'Trung', color: 'Trắng',
    emoji: '🐇', bg: 'bg-pink', status: 'available',
    desc: 'Đậu mềm mại như bông, thích được chải lông và ôm ấp. Cần người kiên nhẫn chăm sóc.',
    tags: ['Mềm mại', 'Cần chăm sóc', 'Đặc biệt']
  },
  {
    id: 19, name: 'Tiger', breed: 'Chó Shiba Inu', species: 'dog',
    age: '3 năm', gender: 'Đực', size: 'Trung', color: 'Cam đen',
    emoji: '🦊', bg: 'bg-orange', status: 'available',
    desc: 'Tiger mang vẻ ngoài như cáo nhỏ. Thông minh, tự lập và rất trung thành với chủ nhân.',
    tags: ['Đẹp trai', 'Tự lập', 'Trung thành']
  },
  {
    id: 20, name: 'Sugar', breed: 'Mèo Siamese', species: 'cat',
    age: '7 tháng', gender: 'Cái', size: 'Nhỏ', color: 'Kem nâu',
    emoji: '😻', bg: 'bg-teal', status: 'available',
    desc: 'Sugar hay kêu và trò chuyện với chủ. Thích được quan tâm và không chịu được cô đơn.',
    tags: ['Giao tiếp', 'Tình cảm', 'Trẻ']
  },
  {
    id: 21, name: 'Gió', breed: 'Chó Phốc Sóc', species: 'dog',
    age: '2 năm', gender: 'Đực', size: 'Rất nhỏ', color: 'Cam',
    emoji: '🐕', bg: 'bg-orange', status: 'available',
    desc: 'Gió nhỏ xíu nhưng tinh thần thép! Cậu bé không ngại đứng trước chó to và rất dũng cảm.',
    tags: ['Dũng cảm', 'Nhỏ gọn', 'Năng lượng']
  },
  {
    id: 22, name: 'Bơ', breed: 'Hamster Golden', species: 'other',
    age: '4 tháng', gender: 'Đực', size: 'Rất nhỏ', color: 'Vàng kem',
    emoji: '🐹', bg: 'bg-yellow', status: 'available',
    desc: 'Bơ ngủ ban ngày và hoạt động ban đêm. Thích chạy bánh xe và cất trữ thức ăn.',
    tags: ['Nhỏ gọn', 'Dễ nuôi', 'Đáng yêu']
  },
  {
    id: 23, name: 'Storm', breed: 'Chó Border Collie', species: 'dog',
    age: '4 năm', gender: 'Cái', size: 'Trung', color: 'Đen trắng',
    emoji: '🐕‍🦺', bg: 'bg-blue', status: 'available',
    desc: 'Storm thông minh nhất trong các giống chó. Cần việc làm và kích thích tinh thần liên tục.',
    tags: ['Thiên tài', 'Năng động', 'Huấn luyện']
  },
  {
    id: 24, name: 'Hoa', breed: 'Mèo Maine Coon', species: 'cat',
    age: '2 năm', gender: 'Cái', size: 'Lớn', color: 'Tam thể',
    emoji: '🐈', bg: 'bg-purple', status: 'available',
    desc: 'Hoa là nữ hoàng với bộ lông dày, dài và sang trọng. Dịu dàng, hiền hậu như mèo hoàng gia.',
    tags: ['Sang trọng', 'Dịu dàng', 'Hoàng gia']
  },
];

/* Lưu danh sách đơn nhận nuôi */
let adoptions = [];

/* Trạng thái lọc/tìm kiếm hiện tại */
let currentFilter = 'all';
let currentSearch = '';

/* Thú cưng đang xem / view đang hiển thị trong modal */
let selectedPet = null;
let modalView  = 'detail'; /* 'detail' | 'form' | 'success' */


/* ==============================================
   HELPERS
   ============================================== */

/**
 * Trả về [class CSS, nhãn] cho badge trạng thái.
 */
function getStatusLabel(status) {
  if (status === 'available') return ['status-available', '✅ Còn'];
  if (status === 'pending')   return ['status-pending',   '⏳ Đang chờ'];
  return                             ['status-adopted',   '🏠 Đã nhận'];
}

/**
 * Hiển thị thông báo toast ngắn.
 */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  setTimeout(() => { t.style.display = 'none'; }, 3000);
}


/* ==============================================
   RENDER PET GRID
   ============================================== */

function renderGrid(pets) {
  const grid = document.getElementById('pet-grid');
  document.getElementById('result-count').textContent = `Hiển thị ${pets.length} thú cưng`;

  if (!pets.length) {
    grid.innerHTML = `
      <div class="empty-state" style="grid-column:1/-1">
        <span class="empty-icon">🔍</span>
        <p>Không tìm thấy thú cưng phù hợp</p>
      </div>`;
    return;
  }

  grid.innerHTML = pets.map(p => {
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


/* ==============================================
   FILTER & SEARCH
   ============================================== */

function getFilteredPets() {
  let pets = PETS;

  /* Lọc theo loài / trạng thái */
  switch (currentFilter) {
    case 'dog':       pets = pets.filter(p => p.species === 'dog');       break;
    case 'cat':       pets = pets.filter(p => p.species === 'cat');       break;
    case 'rabbit':    pets = pets.filter(p => p.species === 'rabbit');    break;
    case 'bird':      pets = pets.filter(p => p.species === 'bird');      break;
    case 'other':     pets = pets.filter(p => p.species === 'other');     break;
    case 'available': pets = pets.filter(p => p.status === 'available');  break;
    case 'young':     pets = pets.filter(p => p.age.includes('tháng') || p.age.includes('1 năm')); break;
  }

  /* Tìm kiếm theo tên / giống */
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    pets = pets.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.breed.toLowerCase().includes(q)
    );
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


/* ==============================================
   MODAL — CHI TIẾT THÚ CƯNG
   ============================================== */

function openPet(id) {
  selectedPet = PETS.find(p => p.id === id);
  modalView   = 'detail';
  renderModal();
  document.getElementById('modal-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function openAdoptForm(id) {
  selectedPet = PETS.find(p => p.id === id);
  modalView   = 'form';
  renderModal();
  document.getElementById('modal-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeModal(e) {
  /* Chỉ đóng khi click vào vùng overlay bên ngoài, hoặc gọi trực tiếp */
  if (e && e.target !== document.getElementById('modal-overlay')) return;
  document.getElementById('modal-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

/* Render nội dung bên trong modal tuỳ theo modalView */
function renderModal() {
  const p  = selectedPet;
  const [cls, label] = getStatusLabel(p.status);
  const mc = document.getElementById('modal-content');

  /* ---- VIEW: CHI TIẾT ---- */
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

  /* ---- VIEW: FORM ĐĂNG KÝ ---- */
  } else if (modalView === 'form') {
    mc.innerHTML = `
      <div style="padding:2.5rem;" class="adopt-form">
        <button class="btn-back" onclick="modalView='detail'; renderModal()">← Quay lại</button>
        <div class="form-title">📋 Đăng ký nhận nuôi ${p.name}</div>
        <p style="font-size:0.88rem;color:var(--text-muted);margin-bottom:1.5rem;line-height:1.6;">
          Vui lòng điền đầy đủ thông tin. Chúng tôi sẽ liên hệ để xác nhận trong vòng 24–48 giờ.
        </p>
        <div class="form-row">
          <div class="form-group">
            <label>Họ và tên *</label>
            <input type="text" id="f-name" placeholder="Nguyễn Văn An">
          </div>
          <div class="form-group">
            <label>Số điện thoại *</label>
            <input type="tel" id="f-phone" placeholder="0912 345 678">
          </div>
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" id="f-email" placeholder="email@example.com">
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Địa chỉ sống</label>
            <input type="text" id="f-addr" placeholder="Quận/Huyện, Tỉnh/TP">
          </div>
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

  /* ---- VIEW: THÀNH CÔNG ---- */
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

/* Gửi form nhận nuôi */
function submitAdopt() {
  const name  = document.getElementById('f-name')?.value.trim();
  const phone = document.getElementById('f-phone')?.value.trim();

  if (!name || !phone) {
    showToast('⚠️ Vui lòng điền tên và số điện thoại');
    return;
  }

  adoptions.push({
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

  /* Đổi trạng thái thú cưng thành "đang chờ" */
  const pet = PETS.find(p => p.id === selectedPet.id);
  if (pet) pet.status = 'pending';

  modalView = 'success';
  renderModal();
  renderGrid(getFilteredPets());
}


/* ==============================================
   ADMIN PANEL
   ============================================== */

function showPublic() {
  closeAdminPanel();
}

function showAdminPanel() {
  document.getElementById('admin-overlay').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}

function closeAdmin(e) {
  if (e.target === document.getElementById('admin-overlay')) closeAdminPanel();
}

function closeAdminPanel() {
  document.getElementById('admin-overlay').style.display = 'none';
  document.body.style.overflow = '';
}

/* Xác thực mật khẩu admin */
function checkAdmin() {
  const pw = document.getElementById('admin-pw').value;
  if (pw === 'admin123') {
    document.getElementById('admin-auth').style.display    = 'none';
    document.getElementById('admin-content').style.display = 'block';
    renderAdminPets();
    renderAdminAdd();
  } else {
    showToast('❌ Mật khẩu không đúng');
  }
}

/* Chuyển tab trong admin */
function switchAdminTab(tab, el) {
  document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
  el.classList.add('active');

  document.getElementById('admin-pets-tab').style.display      = tab === 'pets'      ? 'block' : 'none';
  document.getElementById('admin-adoptions-tab').style.display = tab === 'adoptions' ? 'block' : 'none';
  document.getElementById('admin-add-tab').style.display       = tab === 'add'       ? 'block' : 'none';

  if (tab === 'pets')      renderAdminPets();
  if (tab === 'adoptions') renderAdminAdoptions();
}

/* Render bảng danh sách thú cưng trong admin */
function renderAdminPets() {
  const div = document.getElementById('admin-pets-tab');
  const speciesLabel = { dog: '🐶 Chó', cat: '🐱 Mèo', rabbit: '🐰 Thỏ', bird: '🦜 Chim', other: '🐹 Khác' };

  div.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Tên</th><th>Giống</th><th>Loài</th><th>Tuổi</th><th>Trạng thái</th><th>Thao tác</th>
        </tr>
      </thead>
      <tbody>
        ${PETS.map(p => {
          const [cls, lbl] = getStatusLabel(p.status);
          return `
            <tr>
              <td><strong>${p.emoji} ${p.name}</strong></td>
              <td>${p.breed}</td>
              <td>${speciesLabel[p.species]}</td>
              <td>${p.age}</td>
              <td>
                <span class="status-badge ${cls}" style="position:static;display:inline-block;font-size:0.72rem;">${lbl}</span>
              </td>
              <td>
                <button class="action-btn btn-edit"    onclick="changeStatus(${p.id},'available')">✅ Còn</button>
                <button class="action-btn btn-edit"    onclick="changeStatus(${p.id},'pending')"   style="background:#FFF3CC;color:#856A20;">⏳ Chờ</button>
                <button class="action-btn btn-approve" onclick="changeStatus(${p.id},'adopted')">🏠 Đã nhận</button>
                <button class="action-btn btn-delete"  onclick="deletePet(${p.id})">🗑 Xóa</button>
              </td>
            </tr>`;
        }).join('')}
      </tbody>
    </table>`;
}

/* Render bảng danh sách đơn nhận nuôi */
function renderAdminAdoptions() {
  const div = document.getElementById('admin-adoptions-tab');

  if (!adoptions.length) {
    div.innerHTML = `
      <div class="empty-state">
        <span class="empty-icon">📋</span>
        <p>Chưa có đơn đăng ký nào</p>
      </div>`;
    return;
  }

  div.innerHTML = `
    <table class="admin-table">
      <thead>
        <tr>
          <th>Người đăng ký</th><th>Thú cưng</th><th>SĐT</th><th>Nhà ở</th><th>KN</th><th>Ngày</th><th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        ${adoptions.map((a, i) => `
          <tr>
            <td>
              <strong>${a.applicant}</strong><br>
              <small style="color:var(--text-muted)">${a.email}</small>
            </td>
            <td>${a.petName}</td>
            <td>${a.phone}</td>
            <td>${a.house}</td>
            <td>${a.experience}</td>
            <td>${a.date}</td>
            <td>
              <select onchange="adoptions[${i}].status=this.value"
                style="padding:4px 8px;border-radius:6px;border:1px solid var(--border);font-size:0.8rem;font-family:'DM Sans',sans-serif;">
                <option ${a.status === 'Đang xem xét' ? 'selected' : ''}>Đang xem xét</option>
                <option ${a.status === 'Đã duyệt'     ? 'selected' : ''}>Đã duyệt</option>
                <option ${a.status === 'Từ chối'       ? 'selected' : ''}>Từ chối</option>
              </select>
            </td>
          </tr>`).join('')}
      </tbody>
    </table>`;
}

/* Render form thêm thú cưng mới */
function renderAdminAdd() {
  const div = document.getElementById('admin-add-tab');
  div.innerHTML = `
    <div style="max-width:520px;">
      <div class="form-title">➕ Thêm thú cưng mới</div>
      <div class="form-row">
        <div class="form-group"><label>Tên *</label><input id="a-name" placeholder="Tên thú cưng"></div>
        <div class="form-group"><label>Giống *</label><input id="a-breed" placeholder="Giống / breed"></div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Loài</label>
          <select id="a-species">
            <option value="dog">🐶 Chó</option>
            <option value="cat">🐱 Mèo</option>
            <option value="rabbit">🐰 Thỏ</option>
            <option value="bird">🦜 Chim</option>
            <option value="other">🐹 Khác</option>
          </select>
        </div>
        <div class="form-group"><label>Tuổi</label><input id="a-age" placeholder="VD: 2 năm, 6 tháng"></div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label>Giới tính</label>
          <select id="a-gender"><option>Đực</option><option>Cái</option></select>
        </div>
        <div class="form-group">
          <label>Kích thước</label>
          <select id="a-size"><option>Rất nhỏ</option><option>Nhỏ</option><option>Trung</option><option>Lớn</option></select>
        </div>
      </div>
      <div class="form-group">
        <label>Emoji đại diện</label>
        <input id="a-emoji" placeholder="VD: 🐶" value="🐾">
      </div>
      <div class="form-group">
        <label>Mô tả</label>
        <textarea id="a-desc" placeholder="Mô tả tính cách, đặc điểm..."></textarea>
      </div>
      <button class="btn-submit" onclick="addPet()">➕ Thêm thú cưng</button>
    </div>`;
}

/* Thêm thú cưng mới từ form admin */
function addPet() {
  const name  = document.getElementById('a-name').value.trim();
  const breed = document.getElementById('a-breed').value.trim();

  if (!name || !breed) {
    showToast('⚠️ Vui lòng điền tên và giống');
    return;
  }

  const BG_OPTIONS = ['bg-orange','bg-yellow','bg-pink','bg-blue','bg-green','bg-purple','bg-teal'];

  const newPet = {
    id:      Math.max(...PETS.map(p => p.id)) + 1,
    name,
    breed,
    species: document.getElementById('a-species').value,
    age:     document.getElementById('a-age').value   || 'Không rõ',
    gender:  document.getElementById('a-gender').value,
    size:    document.getElementById('a-size').value,
    color:   'Nhiều màu',
    emoji:   document.getElementById('a-emoji').value || '🐾',
    bg:      BG_OPTIONS[Math.floor(Math.random() * BG_OPTIONS.length)],
    status:  'available',
    desc:    document.getElementById('a-desc').value  || 'Thú cưng đang tìm kiếm mái ấm mới.',
    tags:    ['Mới thêm'],
  };

  PETS.unshift(newPet);
  showToast(`✅ Đã thêm ${name} thành công!`);
  renderAdminPets();
  renderGrid(getFilteredPets());

  /* Reset form */
  ['a-name','a-breed','a-age','a-emoji','a-desc'].forEach(id => {
    document.getElementById(id).value = '';
  });
  document.getElementById('a-emoji').value = '🐾';
}

/* Đổi trạng thái thú cưng */
function changeStatus(id, status) {
  const pet = PETS.find(p => p.id === id);
  if (!pet) return;
  pet.status = status;
  renderAdminPets();
  renderGrid(getFilteredPets());
  showToast(`✅ Đã cập nhật trạng thái ${pet.name}`);
}

/* Xóa thú cưng */
function deletePet(id) {
  const idx = PETS.findIndex(p => p.id === id);
  if (idx === -1) return;
  const name = PETS[idx].name;
  PETS.splice(idx, 1);
  renderAdminPets();
  renderGrid(getFilteredPets());
  showToast(`🗑 Đã xóa ${name}`);
}


/* ==============================================
   KHỞI CHẠY
   ============================================== */
renderGrid(PETS);
