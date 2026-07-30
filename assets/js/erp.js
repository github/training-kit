(function () {
  var app = document.getElementById('appContent');
  var sidebar = document.getElementById('sidebar');
  var dialog = document.getElementById('recordDialog');
  var form = document.getElementById('recordForm');
  var toast = document.getElementById('toast');
  var overview = app.innerHTML;
  var seedOrders = [
    { id: 'KT-2048', customer: 'Olivia Wilson', email: 'olivia@northstar.co', product: 'Office suite', date: '24 May, 10:42', amount: 2485, status: 'Paid' },
    { id: 'KT-2047', customer: 'James Miller', email: 'james@vertex.io', product: 'Hardware bundle', date: '24 May, 09:18', amount: 1290.5, status: 'Pending' },
    { id: 'KT-2046', customer: 'Sophia Chen', email: 'sophia@greenline.com', product: 'Annual support', date: '23 May, 16:05', amount: 3842, status: 'Paid' }
  ];
  var inventory = [
    { sku: 'PRD-104', product: 'Ergonomic chair', category: 'Furniture', stock: 82, price: 349 },
    { sku: 'PRD-118', product: 'Standing desk', category: 'Furniture', stock: 14, price: 689 },
    { sku: 'PRD-203', product: 'USB-C dock', category: 'Electronics', stock: 5, price: 179 },
    { sku: 'PRD-221', product: '27-inch monitor', category: 'Electronics', stock: 0, price: 429 }
  ];
  var orders = JSON.parse(localStorage.getItem('kentro-orders') || 'null') || seedOrders;

  function money(value) { return '$' + Number(value).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }); }
  function initials(name) { return name.split(' ').map(function (word) { return word[0]; }).slice(0, 2).join('').toUpperCase(); }
  function showToast(message) {
    toast.firstChild.nodeValue = message + ' ';
    toast.classList.add('show');
    window.setTimeout(function () { toast.classList.remove('show'); }, 3000);
  }
  function pageHeader(kicker, title, description, action) {
    return '<section class="welcome page-welcome"><div><p class="eyebrow">' + kicker + '</p><h1>' + title + '</h1><p>' + description + '</p></div>' + (action || '') + '</section>';
  }
  function ordersTable(items) {
    return '<div class="table-wrap"><table><thead><tr><th>Order</th><th>Customer</th><th>Product</th><th>Date</th><th>Amount</th><th>Status</th><th></th></tr></thead><tbody>' + items.map(function (order) {
      return '<tr><td><strong>#' + order.id + '</strong></td><td><div class="customer"><span class="avatar lilac">' + initials(order.customer) + '</span><span><strong>' + order.customer + '</strong><small>' + order.email + '</small></span></div></td><td>' + order.product + '</td><td>' + order.date + '</td><td><strong>' + money(order.amount) + '</strong></td><td><span class="status ' + order.status.toLowerCase() + '">' + order.status + '</span></td><td><button class="row-delete" data-delete="' + order.id + '" aria-label="Delete order">Delete</button></td></tr>';
    }).join('') + '</tbody></table></div>';
  }
  function render(view) {
    document.querySelectorAll('.nav-item').forEach(function (link) { link.classList.toggle('active', link.dataset.view === view); });
    if (view === 'overview') {
      app.innerHTML = overview;
      bindOverview();
    } else if (view === 'orders') {
      app.innerHTML = pageHeader('SALES', 'Orders', 'Create, review, and manage customer orders.', '<button class="primary" id="newOrder">New order</button>') + '<section class="metrics compact"><article class="metric"><p>Total orders</p><h2>' + orders.length + '</h2><small>All recorded transactions</small></article><article class="metric"><p>Order value</p><h2>' + money(orders.reduce(function (sum, item) { return sum + Number(item.amount); }, 0)) + '</h2><small>Gross order value</small></article><article class="metric"><p>Awaiting payment</p><h2>' + orders.filter(function (item) { return item.status === 'Pending'; }).length + '</h2><small>Requires attention</small></article></section><section class="panel data-panel"><div class="panel-head"><div><h3>All orders</h3><p>Stored locally in this browser</p></div></div>' + ordersTable(orders) + '</section>';
      document.getElementById('newOrder').addEventListener('click', openOrder);
      document.querySelectorAll('[data-delete]').forEach(function (button) { button.addEventListener('click', deleteOrder); });
    } else if (view === 'inventory') {
      app.innerHTML = pageHeader('OPERATIONS', 'Inventory', 'Monitor stock levels and product availability.') + '<section class="panel data-panel"><div class="panel-head"><div><h3>Product inventory</h3><p>' + inventory.length + ' active products</p></div><button class="secondary">Add product</button></div><div class="table-wrap"><table><thead><tr><th>SKU</th><th>Product</th><th>Category</th><th>Unit price</th><th>Stock</th><th>Status</th></tr></thead><tbody>' + inventory.map(function (item) { var state = item.stock === 0 ? 'Out of stock' : item.stock < 10 ? 'Low stock' : 'In stock'; return '<tr><td><strong>' + item.sku + '</strong></td><td>' + item.product + '</td><td>' + item.category + '</td><td>' + money(item.price) + '</td><td><strong>' + item.stock + '</strong></td><td><span class="status ' + (item.stock === 0 ? 'overdue' : item.stock < 10 ? 'pending' : 'paid') + '">' + state + '</span></td></tr>'; }).join('') + '</tbody></table></div></section>';
    } else if (view === 'customers') {
      var customers = orders.reduce(function (list, order) { if (!list.some(function (item) { return item.email === order.email; })) list.push(order); return list; }, []);
      app.innerHTML = pageHeader('RELATIONSHIPS', 'Customers', 'Customer directory and lifetime value overview.') + '<section class="card-grid">' + customers.map(function (customer) { var total = orders.filter(function (item) { return item.email === customer.email; }).reduce(function (sum, item) { return sum + Number(item.amount); }, 0); return '<article class="contact-card"><span class="avatar lilac">' + initials(customer.customer) + '</span><h3>' + customer.customer + '</h3><p>' + customer.email + '</p><div><small>Lifetime value</small><strong>' + money(total) + '</strong></div></article>'; }).join('') + '</section>';
    } else if (view === 'finance') {
      app.innerHTML = pageHeader('ACCOUNTING', 'Finance', 'Cash flow, receivables, and financial health.') + '<section class="metrics"><article class="metric"><p>Cash balance</p><h2>$186,420</h2><small>Across 3 accounts</small></article><article class="metric"><p>Receivables</p><h2>$24,890</h2><small>8 open invoices</small></article><article class="metric"><p>Expenses</p><h2>$91,240</h2><small>This month</small></article><article class="metric"><p>Net margin</p><h2>28.4%</h2><small>Up 3.1% this quarter</small></article></section><section class="panel empty-state"><div class="metric-icon green">$</div><h3>Books are reconciled</h3><p>All bank transactions have been reviewed through today.</p><button class="primary">Review accounts</button></section>';
    } else if (view === 'team') {
      app.innerHTML = pageHeader('PEOPLE', 'Team', 'Manage employees, roles, and workspace access.', '<button class="primary">Invite member</button>') + '<section class="card-grid"><article class="contact-card"><span class="avatar">AM</span><h3>Alex Morgan</h3><p>Administrator</p><div><small>Status</small><strong class="online">Active</strong></div></article><article class="contact-card"><span class="avatar peach">OW</span><h3>Olivia White</h3><p>Sales manager</p><div><small>Status</small><strong class="online">Active</strong></div></article><article class="contact-card"><span class="avatar mint">SC</span><h3>Sam Carter</h3><p>Inventory lead</p><div><small>Status</small><strong class="online">Active</strong></div></article></section>';
    } else if (view === 'reports') {
      app.innerHTML = pageHeader('ANALYTICS', 'Reports', 'Download operational data for deeper analysis.') + '<section class="card-grid report-grid"><article class="contact-card"><h3>Sales performance</h3><p>Revenue, orders, and average order value.</p><button class="full-button export-orders">Download CSV</button></article><article class="contact-card"><h3>Inventory valuation</h3><p>Stock counts and current product values.</p><button class="full-button">Generate report</button></article><article class="contact-card"><h3>Customer summary</h3><p>Customer activity and lifetime value.</p><button class="full-button">Generate report</button></article></section>';
      document.querySelector('.export-orders').addEventListener('click', exportOrders);
    } else {
      app.innerHTML = pageHeader('WORKSPACE', 'Settings', 'Configure your Kentro organization.') + '<section class="panel settings-form"><h3>Company profile</h3><label>Company name<input value="Kentro Industries"></label><label>Business email<input value="hello@kentro.example" type="email"></label><label>Currency<select><option>USD — US Dollar</option><option>EUR — Euro</option><option>GBP — British Pound</option></select></label><button class="primary" id="saveSettings">Save changes</button></section>';
      document.getElementById('saveSettings').addEventListener('click', function () { showToast('Settings saved'); });
    }
    sidebar.classList.remove('open');
  }
  function openOrder() { form.reset(); dialog.showModal(); }
  function deleteOrder(event) { orders = orders.filter(function (item) { return item.id !== event.currentTarget.dataset.delete; }); saveOrders(); render('orders'); showToast('Order deleted'); }
  function saveOrders() { localStorage.setItem('kentro-orders', JSON.stringify(orders)); document.getElementById('orderCount').textContent = orders.length; }
  function exportOrders() { var csv = ['Order,Customer,Email,Product,Amount,Status'].concat(orders.map(function (item) { return [item.id, item.customer, item.email, item.product, item.amount, item.status].join(','); })).join('\n'); var link = document.createElement('a'); link.href = URL.createObjectURL(new Blob([csv], { type: 'text/csv' })); link.download = 'kentro-orders.csv'; link.click(); URL.revokeObjectURL(link.href); showToast('Report downloaded'); }
  function bindOverview() { document.getElementById('newOrder').addEventListener('click', openOrder); document.getElementById('exportReport').addEventListener('click', exportOrders); }

  document.getElementById('menu').addEventListener('click', function () { sidebar.classList.toggle('open'); });
  document.querySelectorAll('.nav-item').forEach(function (item) { item.addEventListener('click', function () { render(item.dataset.view); }); });
  document.querySelectorAll('[data-close-dialog]').forEach(function (button) { button.addEventListener('click', function () { dialog.close(); }); });
  document.getElementById('globalSearch').addEventListener('keydown', function (event) { if (event.key === 'Enter') { var query = event.target.value.toLowerCase(); render('orders'); document.querySelectorAll('tbody tr').forEach(function (row) { row.hidden = !row.textContent.toLowerCase().includes(query); }); } });
  form.addEventListener('submit', function (event) { event.preventDefault(); var data = new FormData(form); orders.unshift({ id: 'KT-' + (2046 + orders.length + 1), customer: data.get('customer'), email: data.get('email'), product: data.get('product'), date: 'Today', amount: Number(data.get('amount')), status: data.get('status') }); saveOrders(); dialog.close(); render('orders'); showToast('Order created successfully'); });
  toast.querySelector('button').addEventListener('click', function () { toast.classList.remove('show'); });
  saveOrders(); bindOverview();
  if (location.hash.slice(1)) render(location.hash.slice(1));
}());
