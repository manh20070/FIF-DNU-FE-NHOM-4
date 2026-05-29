/* =============================================
   PETADOPT — shared.js
   Dữ liệu dùng chung giữa index.html & admin.html
   Lưu tạm bằng sessionStorage (F5 = reset)
   ============================================= */

const DEFAULT_PETS = [
  { id:1,  name:'Mochi',  breed:'Poodle Trắng',          species:'dog',    age:'2 năm',   gender:'Đực', size:'Nhỏ',     color:'Trắng tuyết', emoji:'🐩', bg:'bg-gray',   status:'available', desc:'Mochi cực kỳ thân thiện và thông minh. Cậu bé yêu trẻ em và thích chơi. Đã tiêm đầy đủ vaccine.', tags:['Thân thiện','Đã tiêm','Sạch bóng'] },
  { id:2,  name:'Luna',   breed:'Mèo Anh Lông Ngắn',     species:'cat',    age:'3 năm',   gender:'Cái', size:'Trung',   color:'Xám xanh',    emoji:'😺', bg:'bg-blue',   status:'available', desc:'Luna là quý cô điềm đạm, thích nằm sưởi nắng và được vuốt ve. Phù hợp sống căn hộ nhỏ.', tags:['Điềm tĩnh','Sạch sẽ','Trong nhà'] },
  { id:3,  name:'Coco',   breed:'Chihuahua',              species:'dog',    age:'1 năm',   gender:'Cái', size:'Rất nhỏ',color:'Nâu vàng',    emoji:'🐕', bg:'bg-orange', status:'pending',   desc:'Coco nhỏ nhắn nhưng đầy năng lượng! Cô bé rất dũng cảm và thích khám phá mọi thứ.', tags:['Năng động','Dũng cảm','Hay chơi'] },
  { id:4,  name:'Buddy',  breed:'Golden Retriever',       species:'dog',    age:'4 năm',   gender:'Đực', size:'Lớn',     color:'Vàng kim',    emoji:'🦮', bg:'bg-yellow', status:'available', desc:'Buddy là người bạn hoàn hảo cho gia đình. Thích chạy nhảy ngoài trời và bơi lội.', tags:['Trung thành','Gia đình','Hoạt động'] },
  { id:5,  name:'Miu',    breed:'Mèo Ragdoll',            species:'cat',    age:'8 tháng', gender:'Cái', size:'Trung',   color:'Trắng kem',   emoji:'🐈', bg:'bg-pink',   status:'available', desc:'Miu ngoan ngoãn như búp bê, thích được bế và không bao giờ cào cấu.', tags:['Ngoan ngoãn','Dịu dàng','Bé nhỏ'] },
  { id:6,  name:'Tai',    breed:'Thỏ Hà Lan',             species:'rabbit', age:'1 năm',   gender:'Đực', size:'Nhỏ',     color:'Trắng đen',   emoji:'🐰', bg:'bg-gray',   status:'available', desc:'Tai rất thông minh, có thể học được nhiều trò. Thích ăn rau xanh và được chơi đùa.', tags:['Thông minh','Đáng yêu','Sạch'] },
  { id:7,  name:'Rex',    breed:'German Shepherd',        species:'dog',    age:'5 năm',   gender:'Đực', size:'Lớn',     color:'Đen nâu',     emoji:'🐕‍🦺', bg:'bg-brown', status:'available', desc:'Rex được huấn luyện chuyên nghiệp. Trung thành, bảo vệ tốt. Cần người có kinh nghiệm.', tags:['Đã huấn luyện','Bảo vệ','Trung thành'] },
  { id:8,  name:'Kiwi',   breed:'Vẹt Budgerigar',         species:'bird',   age:'2 năm',   gender:'Đực', size:'Rất nhỏ',color:'Xanh lá',     emoji:'🦜', bg:'bg-green',  status:'available', desc:'Kiwi hót hay và có thể bắt chước tiếng người. Vui tính, thích giao tiếp.', tags:['Biết nói','Vui vẻ','Thân thiện'] },
  { id:9,  name:'Pearl',  breed:'Mèo Ba Tư',              species:'cat',    age:'6 năm',   gender:'Cái', size:'Trung',   color:'Trắng',       emoji:'🐱', bg:'bg-pink',   status:'adopted',   desc:'Pearl đã tìm được mái ấm mới! Cô bé sống hạnh phúc với gia đình mới của mình.', tags:['Đã nhận nuôi','Hạnh phúc'] },
  { id:10, name:'Dũng',   breed:'Chó Phú Quốc',           species:'dog',    age:'3 năm',   gender:'Đực', size:'Trung',   color:'Vàng',        emoji:'🐶', bg:'bg-orange', status:'available', desc:'Dũng là giống chó Việt Nam thuần chủng, thông minh và rất trung thành với chủ.', tags:['Thuần Việt','Thông minh','Khỏe mạnh'] },
  { id:11, name:'Bông',   breed:'Mèo Munchkin',           species:'cat',    age:'1 năm',   gender:'Cái', size:'Nhỏ',     color:'Cam trắng',   emoji:'🐾', bg:'bg-orange', status:'pending',   desc:'Bông đặc biệt với đôi chân ngắn xinh xắn. Cực kỳ hiếu động và hay chơi đùa suốt ngày.', tags:['Đặc biệt','Hiếu động','Đáng yêu'] },
  { id:12, name:'Max',    breed:'Husky Siberia',          species:'dog',    age:'2 năm',   gender:'Đực', size:'Lớn',     color:'Đen trắng',   emoji:'🐺', bg:'bg-blue',   status:'available', desc:'Max có đôi mắt xanh huyền bí, lanh lợi và thích hoạt động ngoài trời. Cần không gian rộng.', tags:['Năng động','Đẹp trai','Ngoài trời'] },
  { id:13, name:'Hạnh',   breed:'Chuột Lang',             species:'other',  age:'6 tháng', gender:'Cái', size:'Rất nhỏ',color:'Nâu trắng',   emoji:'🐹', bg:'bg-brown',  status:'available', desc:'Hạnh nhỏ nhắn và dễ thương. Phù hợp cho trẻ em làm quen với việc chăm sóc thú cưng.', tags:['Nhỏ gọn','Phù hợp trẻ em','Dễ nuôi'] },
  { id:14, name:'Lily',   breed:'Mèo Scottish Fold',      species:'cat',    age:'4 năm',   gender:'Cái', size:'Trung',   color:'Xám vàng',    emoji:'😸', bg:'bg-yellow', status:'available', desc:'Lily với đôi tai gập đặc trưng. Bình tĩnh, quan sát mọi thứ và thích sống yên tĩnh.', tags:['Đặc biệt','Bình tĩnh','Trưởng thành'] },
  { id:15, name:'Rio',    breed:'Vẹt Cockatiel',           species:'bird',   age:'3 năm',   gender:'Đực', size:'Nhỏ',     color:'Xám vàng',    emoji:'🐦', bg:'bg-yellow', status:'available', desc:'Rio thích được âu yếm và hót rất hay. Có thể học huýt sáo các bài hát đơn giản.', tags:['Biết hát','Thân thiện','Dễ nuôi'] },
  { id:16, name:'Kẹo',    breed:'Chó Corgi',              species:'dog',    age:'1 năm',   gender:'Cái', size:'Nhỏ',     color:'Vàng trắng',  emoji:'🐕', bg:'bg-yellow', status:'pending',   desc:'Kẹo đáng yêu với cái đuôi ngắn ngộ nghĩnh. Rất thông minh và dễ huấn luyện.', tags:['Thông minh','Đáng yêu','Trẻ'] },
  { id:17, name:'Shadow', breed:'Mèo Đen Thuần',          species:'cat',    age:'5 năm',   gender:'Đực', size:'Trung',   color:'Đen',         emoji:'🐈‍⬛', bg:'bg-gray', status:'available', desc:'Shadow huyền bí và độc lập. Thích sống tự do nhưng vẫn trung thành với chủ của mình.', tags:['Độc lập','Huyền bí','Trung thành'] },
  { id:18, name:'Đậu',    breed:'Thỏ Angora',             species:'rabbit', age:'2 năm',   gender:'Cái', size:'Trung',   color:'Trắng',       emoji:'🐇', bg:'bg-pink',   status:'available', desc:'Đậu mềm mại như bông, thích được chải lông và ôm ấp. Cần người kiên nhẫn chăm sóc.', tags:['Mềm mại','Cần chăm sóc','Đặc biệt'] },
  { id:19, name:'Tiger',  breed:'Chó Shiba Inu',          species:'dog',    age:'3 năm',   gender:'Đực', size:'Trung',   color:'Cam đen',     emoji:'🦊', bg:'bg-orange', status:'available', desc:'Tiger mang vẻ ngoài như cáo nhỏ. Thông minh, tự lập và rất trung thành với chủ nhân.', tags:['Đẹp trai','Tự lập','Trung thành'] },
  { id:20, name:'Sugar',  breed:'Mèo Siamese',            species:'cat',    age:'7 tháng', gender:'Cái', size:'Nhỏ',     color:'Kem nâu',     emoji:'😻', bg:'bg-teal',   status:'available', desc:'Sugar hay kêu và trò chuyện với chủ. Thích được quan tâm và không chịu được cô đơn.', tags:['Giao tiếp','Tình cảm','Trẻ'] },
  { id:21, name:'Gió',    breed:'Chó Phốc Sóc',           species:'dog',    age:'2 năm',   gender:'Đực', size:'Rất nhỏ',color:'Cam',         emoji:'🐕', bg:'bg-orange', status:'available', desc:'Gió nhỏ xíu nhưng tinh thần thép! Cậu bé không ngại đứng trước chó to và rất dũng cảm.', tags:['Dũng cảm','Nhỏ gọn','Năng lượng'] },
  { id:22, name:'Bơ',     breed:'Hamster Golden',         species:'other',  age:'4 tháng', gender:'Đực', size:'Rất nhỏ',color:'Vàng kem',    emoji:'🐹', bg:'bg-yellow', status:'available', desc:'Bơ ngủ ban ngày và hoạt động ban đêm. Thích chạy bánh xe và cất trữ thức ăn.', tags:['Nhỏ gọn','Dễ nuôi','Đáng yêu'] },
  { id:23, name:'Storm',  breed:'Chó Border Collie',      species:'dog',    age:'4 năm',   gender:'Cái', size:'Trung',   color:'Đen trắng',   emoji:'🐕‍🦺', bg:'bg-blue', status:'available', desc:'Storm thông minh nhất trong các giống chó. Cần việc làm và kích thích tinh thần liên tục.', tags:['Thiên tài','Năng động','Huấn luyện'] },
  { id:24, name:'Hoa',    breed:'Mèo Maine Coon',         species:'cat',    age:'2 năm',   gender:'Cái', size:'Lớn',     color:'Tam thể',     emoji:'🐈', bg:'bg-purple', status:'available', desc:'Hoa là nữ hoàng với bộ lông dày, dài và sang trọng. Dịu dàng, hiền hậu như mèo hoàng gia.', tags:['Sang trọng','Dịu dàng','Hoàng gia'] },
];

const DEFAULT_ADOPTIONS = [];

/* -----------------------------------------------
   STORAGE HELPERS — dùng sessionStorage
   (tắt tab / F5 → reset về mặc định)
----------------------------------------------- */
function loadPets() {
  try {
    const raw = sessionStorage.getItem('pa_pets');
    return raw ? JSON.parse(raw) : JSON.parse(JSON.stringify(DEFAULT_PETS));
  } catch { return JSON.parse(JSON.stringify(DEFAULT_PETS)); }
}

function savePets(pets) {
  sessionStorage.setItem('pa_pets', JSON.stringify(pets));
}

function loadAdoptions() {
  try {
    const raw = sessionStorage.getItem('pa_adoptions');
    return raw ? JSON.parse(raw) : [];
  } catch { return []; }
}

function saveAdoptions(adoptions) {
  sessionStorage.setItem('pa_adoptions', JSON.stringify(adoptions));
}

/* -----------------------------------------------
   STATUS HELPERS
----------------------------------------------- */
function getStatusLabel(status) {
  if (status === 'available') return ['status-available', '✅ Còn'];
  if (status === 'pending')   return ['status-pending',   '⏳ Đang chờ'];
  return                             ['status-adopted',   '🏠 Đã nhận'];
}

/* -----------------------------------------------
   TOAST (shared UI)
----------------------------------------------- */
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(t._timer);
  t._timer = setTimeout(() => { t.style.display = 'none'; }, 3000);
}
