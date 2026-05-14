
const PRODUCTS=[
  {
    "id": "pulse",
    "name": "ARKTOS PULSE",
    "subtitle": "Предтренировочный комплекс",
    "format": "Порошок 250 г",
    "price": 2200,
    "image": "arktos-pulse.png",
    "category": "Powder Systems",
    "desc": "Фокус, энергия и тренировочная интенсивность без лишнего визуального шума."
  },
  {
    "id": "atp",
    "name": "ARKTOS ATP",
    "subtitle": "Энергия и силовой потенциал",
    "format": "Порошок 250 г",
    "price": 2530,
    "image": "arktos-atp.png",
    "category": "Powder Systems",
    "desc": "Система поддержки выходной мощности для тяжёлых тренировочных сессий."
  },
  {
    "id": "hydra",
    "name": "ARKTOS HYDRA",
    "subtitle": "Гидратация и баланс электролитов",
    "format": "Порошок 250 г",
    "price": 2750,
    "image": "arktos-hydra.png",
    "category": "Powder Systems",
    "desc": "Cold hydration matrix для нагрузки, жары и длинных тренировок."
  },
  {
    "id": "recover",
    "name": "ARKTOS RECOVER",
    "subtitle": "Восстановление и регенерация",
    "format": "Порошок 250 г",
    "price": 2970,
    "image": "arktos-recover.png",
    "category": "Powder Systems",
    "desc": "Post-training support для продуманного recovery-протокола."
  },
  {
    "id": "flow",
    "name": "ARKTOS FLOW",
    "subtitle": "Кровообращение и pump-support",
    "format": "Порошок 250 г",
    "price": 3190,
    "image": "arktos-flow.png",
    "category": "Powder Systems",
    "desc": "Формула для ощущения наполненности, движения и тренировочного flow."
  },
  {
    "id": "core",
    "name": "ARKTOS CORE",
    "subtitle": "Ежедневная основа формы",
    "format": "Порошок 250 г",
    "price": 3300,
    "image": "arktos-core.png",
    "category": "Powder Systems",
    "desc": "Базовая система daily performance для стабильного режима."
  },
  {
    "id": "focus",
    "name": "ARKTOS FOCUS",
    "subtitle": "Фокус и ясность каждый день",
    "format": "60 капсул",
    "price": 3520,
    "image": "arktos-focus.png",
    "category": "Capsule Systems",
    "desc": "Поддержка концентрации для работы, спорта и высокой когнитивной нагрузки."
  },
  {
    "id": "adapt",
    "name": "ARKTOS ADAPT",
    "subtitle": "Адаптогенная защита от стресса",
    "format": "60 капсул",
    "price": 3850,
    "image": "arktos-adapt.png",
    "category": "Capsule Systems",
    "desc": "Adaptogen-support комплекс для устойчивости к ежедневной нагрузке."
  },
  {
    "id": "test",
    "name": "ARKTOS TEST",
    "subtitle": "Поддержка performance-баланса",
    "format": "60 капсул",
    "price": 3960,
    "image": "arktos-test.png",
    "category": "Capsule Systems",
    "desc": "Daily-support система для активного lifestyle и тренировочного режима."
  },
  {
    "id": "sleep",
    "name": "ARKTOS SLEEP",
    "subtitle": "Глубокий сон и восстановление",
    "format": "60 капсул",
    "price": 4400,
    "image": "arktos-sleep.png",
    "category": "Capsule Systems",
    "desc": "Night recovery formula для вечернего восстановления и quality-rest."
  },
  {
    "id": "joint",
    "name": "ARKTOS JOINT",
    "subtitle": "Поддержка суставов и подвижности",
    "format": "60 капсул",
    "price": 4180,
    "image": "arktos-joint.png",
    "category": "Capsule Systems",
    "desc": "Mobility-support комплекс для активного движения и регулярной нагрузки."
  },
  {
    "id": "omega",
    "name": "ARKTOS OMEGA",
    "subtitle": "Omega-комплекс для сердца и мозга",
    "format": "60 капсул",
    "price": 4620,
    "image": "arktos-omega.png",
    "category": "Capsule Systems",
    "desc": "Performance lipid complex для ежедневной поддержки активного образа жизни."
  },
  {
    "id": "amp-focus",
    "name": "ARKTOS AMP:FOCUS",
    "subtitle": "Жидкий focus-концентрат",
    "format": "5 ампул / можно поштучно",
    "price": 5720,
    "image": "arktos-amp-focus.png",
    "category": "Ampoule Systems",
    "desc": "Liquid nootropic protocol для концентрации и плотного рабочего ритма."
  },
  {
    "id": "amp-flow",
    "name": "ARKTOS AMP:FLOW",
    "subtitle": "Жидкая поддержка flow",
    "format": "5 ампул / можно поштучно",
    "price": 5940,
    "image": "arktos-amp-flow.png",
    "category": "Ampoule Systems",
    "desc": "Ampoule-system для тренировочной динамики, hydration и endurance."
  },
  {
    "id": "amp-recover",
    "name": "ARKTOS AMP:RECOVER",
    "subtitle": "Жидкий recovery-протокол",
    "format": "5 ампул / можно поштучно",
    "price": 6160,
    "image": "arktos-amp-recover.png",
    "category": "Ampoule Systems",
    "desc": "Liquid recovery support для post-training режима."
  },
  {
    "id": "amp-core",
    "name": "ARKTOS AMP:CORE",
    "subtitle": "Daily performance concentrate",
    "format": "5 ампул / можно поштучно",
    "price": 6380,
    "image": "arktos-amp-core.png",
    "category": "Ampoule Systems",
    "desc": "Компактная liquid-система для ежедневного performance-ритма."
  }
];
const REVIEWS=[["Илья, Москва", "ARKTOS PULSE", "Беру перед силовыми. Нравится, что эффект ощущается собранно: больше концентрации на подходах, без ощущения дешёвого стимулятора."], ["Денис, Самара", "ARKTOS HYDRA", "После длинных тренировок стало проще держать темп. Вкус и подача ощущаются дороже обычных электролитов."], ["Артём, Казань", "ARKTOS FOCUS", "Использую в рабочие дни. Нет резкой эйфории, просто спокойная ясность и меньше расфокуса."], ["Максим, СПб", "ARKTOS RECOVER", "Добавил после вечерних тренировок. По ощущениям легче возвращаться в режим на следующий день."], ["Руслан, Уфа", "ARKTOS AMP:FOCUS", "Ампулы выглядят как отдельный ritual. Удобно взять одну перед задачами или тренировкой."], ["Егор, Краснодар", "ARKTOS JOINT", "Брал для регулярных тренировок и спаррингов. Нравится формат: не обещает чудес, но хорошо ложится в ежедневный протокол."]];
const fmt=n=>new Intl.NumberFormat('ru-RU').format(n)+' ₽';
const cart=()=>JSON.parse(localStorage.getItem('arktos_cart')||'[]');
const saveCart=c=>{localStorage.setItem('arktos_cart',JSON.stringify(c));updateCartCount();};
function updateCartCount(){const el=document.getElementById('cartCount'); if(el) el.textContent=cart().reduce((s,i)=>s+i.qty,0)}
function addToCart(id,qty=1){let c=cart();let item=c.find(x=>x.id===id); if(item)item.qty+=qty; else c.push({id,qty}); saveCart(c); alert('Товар добавлен в корзину');}
function removeFromCart(id){saveCart(cart().filter(x=>x.id!==id)); renderCart?.(); renderAdmin?.();}
function setQty(id,qty){let c=cart(); let i=c.find(x=>x.id===id); if(i) i.qty=Math.max(1,qty); saveCart(c); renderCart?.();}
function detailedCart(){return cart().map(i=>({...PRODUCTS.find(p=>p.id===i.id),qty:i.qty})).filter(i=>i.id)}
function onlineTotal(total){return Math.round(total*0.9)}
function confirmAge(){localStorage.setItem('arktos_age','1');document.getElementById('ageModal').style.display='none'}
function checkAge(){let m=document.getElementById('ageModal'); if(m && !localStorage.getItem('arktos_age'))m.style.display='flex'}
function renderCatalog(){let root=document.getElementById('catalogGrid'); if(!root)return; const cat=document.querySelector('.tab.active')?.dataset.cat||'all'; root.innerHTML=PRODUCTS.filter(p=>cat==='all'||p.category===cat).map(p=>`<a class="product-card" href="product.html?id=${p.id}"><span class="badge">${p.format}</span><img src="${p.image}" alt="${p.name}"><div class="product-body"><h3>${p.name}</h3><p class="muted">${p.subtitle}</p><div class="price">${fmt(p.price)} <span class="old-price">${fmt(Math.round(p.price/0.9))}</span></div></div></a>`).join('')}
function renderProduct(){let box=document.getElementById('productBox'); if(!box)return; let id=new URLSearchParams(location.search).get('id')||'pulse'; let p=PRODUCTS.find(x=>x.id===id)||PRODUCTS[0]; document.title=p.name; box.innerHTML=`<div><img src="${p.image}" alt="${p.name}"></div><div class="buy-panel"><p class="kicker">${p.category}</p><h1>${p.name}</h1><p class="lead">${p.desc}</p><p class="muted">Формат: ${p.format}</p><div class="price">${fmt(p.price)} <span class="old-price">${fmt(Math.round(p.price/0.9))}</span></div><p class="muted">При онлайн-оплате скидка 10% применяется автоматически на checkout.</p><button class="btn" onclick="addToCart('${p.id}')">Добавить в корзину</button><a class="btn secondary" href="catalog.html">Назад в каталог</a><hr><h3>Рекомендация</h3><p class="muted">Используйте как часть персонального ARKTOS protocol. Не является лекарственным средством.</p></div>`}
function renderCart(){let root=document.getElementById('cartRows'); if(!root)return; let items=detailedCart(); if(!items.length){root.innerHTML='<div class="glass"><h2>Корзина пуста</h2><a class="btn" href="catalog.html">Перейти в каталог</a></div>';document.getElementById('cartTotal').textContent='0 ₽';return} root.innerHTML=items.map(i=>`<div class="cart-row"><img src="${i.image}"><div><b>${i.name}</b><p class="muted">${i.format}</p><div class="qty"><button onclick="setQty('${i.id}',${i.qty-1})">−</button><b>${i.qty}</b><button onclick="setQty('${i.id}',${i.qty+1})">+</button></div></div><div><b>${fmt(i.price*i.qty)}</b><br><button class="btn secondary" onclick="removeFromCart('${i.id}')">Удалить</button></div></div>`).join('');document.getElementById('cartTotal').textContent=fmt(items.reduce((s,i)=>s+i.price*i.qty,0))}
function renderCheckout(){let el=document.getElementById('checkoutSummary'); if(!el)return; let total=detailedCart().reduce((s,i)=>s+i.price*i.qty,0); el.innerHTML=`<h3>Итого</h3><p>Цена в каталоге: <b>${fmt(total)}</b></p><p>Онлайн-оплата -10%: <b>${fmt(onlineTotal(total))}</b></p><p class="muted">Скидка действует для: банковские карты РФ, СБП QR, USDT TRC20, ЮMoney.</p>`}
function placeOrder(e){e.preventDefault(); let f=new FormData(e.target); let order={id:'AK-'+Date.now().toString().slice(-6),created:new Date().toLocaleString('ru-RU'),name:f.get('name'),telegram:f.get('telegram'),city:f.get('city'),comment:f.get('comment'),delivery:f.get('delivery'),payment:f.get('payment'),items:detailedCart()}; let orders=JSON.parse(localStorage.getItem('arktos_orders')||'[]'); orders.unshift(order); localStorage.setItem('arktos_orders',JSON.stringify(orders)); localStorage.setItem('arktos_last_order',JSON.stringify(order)); saveCart([]); location.href='thank-you.html'}
function renderThank(){let el=document.getElementById('thankBox'); if(!el)return; let o=JSON.parse(localStorage.getItem('arktos_last_order')||'null'); el.innerHTML=o?`<h1>Спасибо за заказ</h1><p>Номер заказа: <b>${o.id}</b></p><p>Мы свяжемся с вами в Telegram для подтверждения.</p><a class="btn" href="catalog.html">Вернуться в каталог</a>`:'<h1>Заказ не найден</h1>'}
function renderAdmin(){let el=document.getElementById('adminOrders'); if(!el)return; let orders=JSON.parse(localStorage.getItem('arktos_orders')||'[]'); el.innerHTML=orders.length?`<table class="admin-table"><tr><th>Заказ</th><th>Клиент</th><th>Оплата</th><th>Доставка</th><th>Товары</th></tr>${orders.map(o=>`<tr><td>${o.id}<br><span class="muted">${o.created}</span></td><td>${o.name}<br>${o.telegram}<br>${o.city}</td><td>${o.payment}</td><td>${o.delivery}</td><td>${o.items.map(i=>i.name+' × '+i.qty).join('<br>')}</td></tr>`).join('')}</table>`:'<p class="muted">Заказов пока нет. Данные хранятся в localStorage браузера.</p>'}
function renderReviews(){let el=document.getElementById('reviewsBox'); if(!el)return; let extra=JSON.parse(localStorage.getItem('arktos_reviews')||'[]'); el.innerHTML=[...REVIEWS,...extra].map(r=>Array.isArray(r)?`<div class="review glass"><div class="stars">★★★★★</div><b>${r[0]}</b><p class="muted">${r[1]}</p><p>${r[2]}</p></div>`:`<div class="review glass"><div class="stars">★★★★★</div><b>${r.name}</b><p class="muted">${r.product}</p><p>${r.text}</p></div>`).join('')}
function addReview(e){e.preventDefault(); let f=new FormData(e.target); let r=JSON.parse(localStorage.getItem('arktos_reviews')||'[]'); r.unshift({name:f.get('name'),product:f.get('product'),text:f.get('text')}); localStorage.setItem('arktos_reviews',JSON.stringify(r)); e.target.reset(); renderReviews()}
document.addEventListener('DOMContentLoaded',()=>{updateCartCount();checkAge();renderCatalog();renderProduct();renderCart();renderCheckout();renderThank();renderAdmin();renderReviews();document.querySelectorAll('.tab').forEach(t=>t.onclick=()=>{document.querySelectorAll('.tab').forEach(x=>x.classList.remove('active'));t.classList.add('active');renderCatalog()})});
