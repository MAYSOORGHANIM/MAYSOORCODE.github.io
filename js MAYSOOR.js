// التحكم في عرض الأقسام
document.addEventListener('DOMContentLoaded', function() {
    const loginSection = document.getElementById('loginSection');
    const mainContent = document.getElementById('mainContent');
    const showLoginBtn = document.getElementById('showLogin');
    const showSignupBtn = document.getElementById('showSignup');
    const switchToSignup = document.getElementById('switchToSignup');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // إظهار واجهة تسجيل الدخول وإخفاء المحتوى الرئيسي
    function showLogin() {
        loginSection.classList.remove('hidden');
        mainContent.classList.add('hidden');
        updateNavLinks('login');
    }
    
    // إظهار المحتوى الرئيسي وإخفاء واجهة تسجيل الدخول
    function showMainContent() {
        loginSection.classList.add('hidden');
        mainContent.classList.remove('hidden');
        updateNavLinks('home');
    }
    
    // تحديث حالة روابط التنقل
    function updateNavLinks(activeTarget) {
        navLinks.forEach(link => {
            if (link.getAttribute('data-target') === activeTarget) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
    
    // التنقل بين الأقسام
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const target = this.getAttribute('data-target');
            
            if (target === 'login') {
                showLogin();
            } else {
                showMainContent();
                
                // التمرير إلى القسم المطلوب
                if (target !== 'home') {
                    const targetSection = document.getElementById(target);
                    if (targetSection) {
                        window.scrollTo({
                            top: targetSection.offsetTop - 80,
                            behavior: 'smooth'
                        });
                    }
                } else {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                }
                
                updateNavLinks(target);
            }
        });
    });
    
    // أحداث الأزرار
    showLoginBtn.addEventListener('click', showLogin);
    showSignupBtn.addEventListener('click', showLogin);
    switchToSignup.addEventListener('click', function(e) {
        e.preventDefault();
        // يمكن إضافة منطق التحويل إلى نموذج التسجيل هنا
        alert('سيتم توجيهك إلى نموذج إنشاء حساب جديد');
    });
    
    // التحقق من صحة نموذج تسجيل الدخول
    document.getElementById('loginForm').addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        // التحقق من صحة البريد الإلكتروني
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('يرجى إدخال بريد إلكتروني صحيح');
            return;
        }
        
        // التحقق من طول كلمة المرور
        if (password.length < 4) {
            alert('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            return;
        }
        
        // في حالة النجاح، يمكن إرسال البيانات للخادم
        if (password==7890 && email=='myswrghanmy5@gmail.com') {
             
        showMainContent();
            
        }
       
    });
    
    // تفعيل التبويبات
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // إزالة النشاط من جميع الأزهار والمحتويات
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));
            
            // إضافة النشاط للزر والمحتوى المحدد
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // تأثيرات إضافية للحقول
    const inputs = document.querySelectorAll('.form-control');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.querySelector('i').style.color = 'var(--primary-color)';
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.querySelector('i').style.color = '#7f8c8d';
        });
    });
    
    // إظهار المحتوى الرئيسي افتراضياً (لأغراض العرض)
    // في التطبيق الحقيقي، قد يتم التحقق من حالة تسجيل الدخول أولاً
    // showMainContent();
});