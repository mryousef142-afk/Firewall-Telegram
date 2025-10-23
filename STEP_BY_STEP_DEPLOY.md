 🚀 راهنمای گام به گام: راه‌اندازی ربات تلگرام با Render.com (نسخه بروزرسانی شده 2025)

## ⚠️ مهم: این راهنما را **مرحله به مرحله** دنبال کنید

این راهنمای کامل شما را قدم به قدم برای راه‌اندازی کامل ربات Telegram Firewall با استفاده از **Render.com** همراهی می‌کند.

**⏱️ زمان تقریبی:** 40-50 دقیقه  
**🎯 سطح:** مبتدی تا متوسط  
**💰 هزینه:** رایگان (با محدودیت‌های پلن رایگان)

---

## 📋 پیش‌نیاز: چیزهایی که نیاز دارید

1. ✅ یک حساب Telegram فعال
2. ✅ یک حساب GitHub (برای ذخیره کد)
3. ✅ یک حساب Render.com (رایگان)
4. ✅ کامپیوتر با اینترنت پایدار
5. ✅ یک ایمیل معتبر (برای تایید حساب Render)
6. ✅ صبر و دقت (خیلی مهم! 😊)

---

## 📱 بخش اول: دریافت اطلاعات اولیه از تلگرام

### 🎯 مرحله 1: دریافت BOT TOKEN از BotFather

#### گام 1.1: باز کردن BotFather
1. اپلیکیشن تلگرام خود را باز کنید
2. در قسمت Search (جستجو) بنویسید: `@BotFather`
3. روی BotFather کلیک کنید (✅ تیک آبی دارد)
4. دکمه `START` را بزنید

#### گام 1.2: ساخت ربات جدید
1. دستور `/newbot` را تایپ کرده و ارسال کنید
2. BotFather پیامی می‌فرستد:  
   **"Alright, a new bot. How are we going to call it? Please choose a name for your bot."**
3. یک **نام فارسی یا انگلیسی** برای ربات انتخاب کنید  
   (مثلاً: `My Awesome Firewall Bot` یا `ربات فایروال من`)
4. Enter بزنید

#### گام 1.3: انتخاب Username برای ربات
1. BotFather می‌پرسد:  
   **"Good. Now let's choose a username for your bot. It must end in `bot`."**
2. یک **username انگلیسی** وارد کنید که حتماً با `bot` تمام شود  
   (مثلاً: `MyFirewallBot` یا `FirewallTestBot`)
3. ⚠️ **توجه**: Username باید یکتا باشد. اگر گرفته بود، یکی دیگر امتحان کنید
4. Enter بزنید

#### گام 1.4: دریافت Token ربات
پس از موفقیت، پیامی شبیه این دریافت می‌کنید:

```
Done! Congratulations on your new bot. You will find it at t.me/YourBotName. 

Use this token to access the HTTP API:
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890

Keep your token secure and store it safely, it can be used by anyone to control your bot.
```

**🔴 بسیار مهم: این TOKEN را کپی کنید و در Notepad یا یک جای امن ذخیره کنید!**

مثال TOKEN:
```
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890
```

---

### 🆔 مرحله 2: پیدا کردن User ID خودتان

#### گام 2.1: باز کردن UserInfoBot
1. در تلگرام Search کنید: `@userinfobot`
2. روی ربات کلیک کنید
3. دکمه `START` را بزنید

#### گام 2.2: دریافت User ID
ربات فوراً پیامی شبیه این برایتان می‌فرستد:

```
Id: 123456789
First name: نام شما
Username: @yourusername
Language: fa
```

**🔴 مهم: عدد مقابل `Id:` را کپی کنید!**

مثال:
```
123456789
```

این عدد **شناسه عددی یکتا** شما در تلگرام است و به عنوان Owner ربات استفاده می‌شود.

---

### 📝 مرحله 3: انتخاب Username ربات

این مرحله انجام شده! Username ربات همان چیزی است که در مرحله 1.3 انتخاب کردید (بدون @).

مثال: اگر ربات شما `@MyFirewallBot` است، Username برابر است با:
```
MyFirewallBot
```

**📋 چک‌لیست اطلاعات:**
- [x] ✅ BOT_TOKEN (دریافت شده)
- [x] ✅ BOT_OWNER_ID (User ID شما)
- [x] ✅ BOT_USERNAME (Username ربات بدون @)

---

## 💾 بخش دوم: آماده‌سازی کد در GitHub

### 💻 مرحله 4: ذخیره کردن کد در GitHub

#### روش A: استفاده از دکمه "Save to GitHub" (ساده‌ترین روش)

1. در همین صفحه چت که هستید، پایین صفحه را ببینید
2. دکمه **"Save to GitHub"** را پیدا کنید و کلیک کنید
3. اگر حساب GitHub ندارید:
   - روی **"Sign up for GitHub"** کلیک کنید
   - یک حساب رایگان بسازید (با ایمیل خود)
   - ایمیل تایید را باز کنید و verify کنید
4. اسم repository را وارد کنید (مثلاً: `telegram-firewall-bot`)
5. روی **"Save"** کلیک کنید
6. منتظر بمانید تا عملیات کامل شود (10-30 ثانیه)

**✅ تبریک! کد شما در GitHub ذخیره شد!**

#### روش B: Clone از Repository موجود (برای کاربران پیشرفته)

اگر کد را از قبل دارید:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
git push origin main
```

---

## ☁️ بخش سوم: راه‌اندازی سرویس‌ها در Render.com

### 🌐 مرحله 5: راه‌اندازی حساب Render.com

#### گام 5.1: ساخت حساب Render
1. به آدرس بروید: **https://render.com**
2. روی دکمه **"Get Started"** یا **"Sign Up"** کلیک کنید

#### گام 5.2: انتخاب روش ثبت‌نام
می‌توانید با یکی از روش‌های زیر ثبت‌نام کنید:

**روش 1: ثبت‌نام با GitHub (🌟 توصیه می‌شود)**
- روی **"Sign up with GitHub"** کلیک کنید
- Render درخواست دسترسی می‌کند
- روی **"Authorize Render"** کلیک کنید
- ✅ خیلی ساده و سریع!

**روش 2: ثبت‌نام با GitLab**
- مشابه GitHub
- مناسب اگر کد شما در GitLab است

**روش 3: ثبت‌نام با Email**
- ایمیل خود را وارد کنید
- رمز عبور قوی انتخاب کنید
- ایمیل تایید را چک کنید

#### گام 5.3: تایید ایمیل
1. به صندوق ایمیل خود بروید
2. ایمیلی از **Render** دریافت خواهید کرد
3. روی لینک **"Verify Email"** کلیک کنید
4. به صفحه Dashboard هدایت می‌شوید

**✅ حساب Render.com شما آماده است!**

#### گام 5.4: آشنایی با Dashboard
پس از ورود، یک صفحه خالی خواهید دید:

```
┌──────────────────────────────────────────┐
│  Welcome to Render!                       │
│  Let's deploy your first project         │
│                                           │
│  [New +]                                 │
└──────────────────────────────────────────┘
```

---

### 🗄️ مرحله 6: راه‌اندازی دیتابیس PostgreSQL

**⚠️ نکته مهم:** این پروژه از **PostgreSQL** استفاده می‌کند، نه MongoDB!

#### گام 6.1: ساخت PostgreSQL Database
1. در Dashboard رندر، در گوشه بالا سمت راست، روی دکمه آبی **"New +"** کلیک کنید
2. از منوی باز شده، گزینه **"PostgreSQL"** را انتخاب کنید
3. یک صفحه فرم با عنوان "Create PostgreSQL" باز می‌شود

#### گام 6.2: پر کردن اطلاعات دیتابیس

در صفحه فرم، فیلدهای زیر را پر کنید:

| فیلد | مقدار پیشنهادی | توضیحات |
|------|----------------|---------|
| **Name** | `firewall-bot-db` | نام دلخواه برای database |
| **Database** | `firewall_bot` | خودکار پر می‌شود |
| **User** | `firewall_user` | خودکار پر می‌شود |
| **Region** | انتخاب نزدیک‌ترین منطقه | مثلاً `Frankfurt (EU Central)` برای خاورمیانه |
| **PostgreSQL Version** | **16** (آخرین نسخه) | پیشنهاد: از نسخه 16 استفاده کنید |
| **Instance Type** | Shared |  |
| **Plan** | **Free** | 🎁 رایگان - 0.1 CPU، 256MB RAM |

**📝 نکته درباره Region:**
- برای ایران، قطر و خاورمیانه: `Frankfurt (EU Central)` ✅
- برای ترکیه: `Frankfurt` یا `London` ✅
- برای آمریکای شمالی: `Oregon (US West)` یا `Ohio (US East)`

#### گام 6.3: ایجاد دیتابیس
1. روی دکمه سبز **"Create Database"** (پایین صفحه) کلیک کنید
2. منتظر بمانید تا دیتابیس ایجاد شود (معمولاً 1-3 دقیقه)
3. وضعیت از `Creating...` به `Available` تغییر می‌کند

#### گام 6.4: دریافت Connection String (🔑 مهم!)

پس از ایجاد موفق، صفحه Info دیتابیس باز می‌شود:

1. در منوی بالا، تب **"Info"** را باز کنید (اگر قبلاً باز نیست)
2. به قسمت **"Connections"** بروید
3. دو نوع Connection String خواهید دید:

**الف) Internal Database URL:**
```
postgresql://firewall_user:xxxx@dpg-xxxx-a.frankfurt-postgres.render.internal/firewall_bot
```
⚠️ این فقط برای سرویس‌های داخلی Render است

**ب) External Database URL:** (👈 **این را باید کپی کنید!**)
```
postgresql://firewall_user:password123ABC@dpg-xxxxxxxxx-a.frankfurt-postgres.render.com/firewall_bot
```
✅ این برای اتصال از بیرون است

4. روی آیکون 📋 کنار **"External Database URL"** کلیک کنید تا کپی شود
5. آن را در یک فایل Notepad یا Text Editor ذخیره کنید

**🔴 بسیار مهم:**
- 🔒 این رشته شامل username، password و آدرس دیتابیس است
- 🚫 **هرگز** این رشته را در GitHub یا جای عمومی قرار ندهید
- 📋 آن را در جای امن نگه دارید

**مثال واقعی:**
```
postgresql://firewall_user:abc123XYZ456def789@dpg-ck7s8d9k8g0s73e4v5g0-a.frankfurt-postgres.render.com/firewall_bot
```

**✅ دیتابیس PostgreSQL شما آماده شد!**

---

### 🔧 مرحله 7: راه‌اندازی Backend (Web Service)

Backend یا همان سرور ربات باید روی یک سرور اجرا شود. در Render از **Web Service** استفاده می‌کنیم.

#### گام 7.1: ایجاد Web Service جدید
1. به Dashboard اصلی Render برگردید (https://dashboard.render.com)
2. روی دکمه **"New +"** کلیک کنید
3. از منو، گزینه **"Web Service"** را انتخاب کنید
4. صفحه **"Connect a repository"** باز می‌شود

#### گام 7.2: اتصال Repository از GitHub

**حالت 1: اگر repository را می‌بینید**
1. لیست repository های GitHub شما نمایش داده می‌شود
2. repository ای که در مرحله 4 ساختید را پیدا کنید (مثلاً `telegram-firewall-bot`)
3. روی دکمه **"Connect"** کنار نام repository کلیک کنید

**حالت 2: اگر repository را نمی‌بینید**
1. روی **"Configure account"** کلیک کنید
2. GitHub به شما نشان می‌دهد Render به چه repository هایی دسترسی دارد
3. **"Select repositories"** یا **"All repositories"** را انتخاب کنید
4. روی **"Save"** کلیک کنید
5. به Render برگردید و repository را پیدا کنید

#### گام 7.3: پیکربندی Web Service

بعد از Connect کردن، یک فرم با فیلدهای زیادی نمایش داده می‌شود:

**📋 جدول تنظیمات:**

| فیلد | مقدار | توضیحات |
|------|-------|---------|
| **Name** | `firewall-bot-backend` | نام دلخواه - باید یکتا باشد |
| **Region** | همان Region دیتابیس | مثلاً `Frankfurt (EU Central)` |
| **Branch** | `main` یا `master` | branch اصلی repository |
| **Root Directory** | **خالی بگذارید** | اگر کد در root است |
| **Runtime** | **Node** | انتخاب کنید |
| **Build Command** | `npm install && npm run migrate:deploy && npx prisma generate` | **دقیقاً این را کپی کنید** ⬇️ |
| **Start Command** | `npm run bot:webhook` | دستور شروع ربات |
| **Instance Type** | Free | رایگان - 0.1 CPU، 512MB RAM |

**⚠️ توضیح Build Command:**
این دستور سه کار انجام می‌دهد:
1. `npm install` → نصب کتابخانه‌های Node.js
2. `npm run migrate:deploy` → اجرای migrations دیتابیس
3. `npx prisma generate` → ساخت Prisma Client

**🔴 بسیار مهم:** Build Command را **دقیقاً** همین‌طور کپی کنید، وگرنه ربات کار نمی‌کند!

#### گام 7.4: تنظیم Environment Variables (متغیرهای محیطی)

قبل از Create کردن، به پایین صفحه بروید و قسمت **"Advanced"** را باز کنید.

در بخش **"Environment Variables"**، این متغیرها را **یکی یکی** اضافه کنید:

**چگونه Environment Variable اضافه کنیم؟**
1. روی **"Add Environment Variable"** کلیک کنید
2. در فیلد **"Key"** نام متغیر را بنویسید
3. در فیلد **"Value"** مقدار را وارد کنید
4. دوباره روی **"Add Environment Variable"** کلیک کنید و برای متغیر بعدی تکرار کنید

**📋 لیست متغیرهای ضروری:**

```bash
# 1. توکن ربات (از مرحله 1)
Key:   BOT_TOKEN
Value: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890

# 2. شناسه مالک (از مرحله 2)
Key:   BOT_OWNER_ID
Value: 123456789

# 3. یوزرنیم ربات (از مرحله 3، بدون @)
Key:   BOT_USERNAME
Value: MyFirewallBot

# 4. آدرس دیتابیس (از مرحله 6.4)
Key:   DATABASE_URL
Value: postgresql://firewall_user:abc123XYZ...@dpg-xxx.render.com/firewall_bot

# 5. حالت اجرای ربات
Key:   BOT_START_MODE
Value: webhook

# 6. پورت سرور (برای Render باید 3000 باشد)
Key:   PORT
Value: 3000

# 7. محیط اجرا (اختیاری)
Key:   NODE_ENV
Value: production
```

**🔴 توجه:** مقادیر بالا فقط **مثال** هستند! از مقادیر **واقعی خودتان** استفاده کنید.

**❓ یادتان رفت کدام مقدار چه بود؟**
- `BOT_TOKEN` → مرحله 1.4 (از BotFather)
- `BOT_OWNER_ID` → مرحله 2.2 (از @userinfobot)
- `BOT_USERNAME` → مرحله 1.3 (بدون @)
- `DATABASE_URL` → مرحله 6.4 (External Database URL)

#### گام 7.5: ایجاد و Deploy اولیه

1. همه چیز را دوباره چک کنید ✅
2. روی دکمه سبز **"Create Web Service"** (پایین صفحه) کلیک کنید
3. Render شروع به Build و Deploy می‌کند

**⏱️ این فرآیند 3-7 دقیقه طول می‌کشد. صبور باشید!**

**📊 در این مدت چه اتفاقی می‌افتد؟**
- Render کد شما را از GitHub دانلود می‌کند
- Dependencies نصب می‌شوند (`npm install`)
- Database migrations اجرا می‌شوند
- Prisma Client ساخته می‌شود
- سرور راه‌اندازی می‌شود

**چگونه پیشرفت را ببینیم؟**
1. در تب **"Logs"** می‌توانید لاگ‌ها را ببینید
2. خطوط سبز ✅ یعنی موفق
3. خطوط قرمز ❌ یعنی خطا (در بخش عیب‌یابی توضیح داده شده)

#### گام 7.6: دریافت URL Backend

پس از Deploy موفق، وضعیت به **"Live"** (سبز) تغییر می‌کند:

1. در بالای صفحه، یک URL به شما نمایش داده می‌شود:
```
https://firewall-bot-backend.onrender.com
```

2. این URL را کپی کنید و در Notepad ذخیره کنید

**🔴 مهم: این URL را نگه دارید - در مراحل بعدی به آن نیاز دارید!**

#### گام 7.7: تنظیم WEBHOOK_DOMAIN

حالا باید URL Backend را به عنوان متغیر محیطی اضافه کنیم:

1. در صفحه Web Service، از منوی سمت چپ، به تب **"Environment"** بروید
2. روی **"Add Environment Variable"** کلیک کنید
3. یک متغیر جدید اضافه کنید:

```bash
Key:   WEBHOOK_DOMAIN
Value: https://firewall-bot-backend.onrender.com
```

⚠️ **توجه:** URL خودتان را وارد کنید، نه این مثال!

4. روی **"Save Changes"** کلیک کنید
5. Render خودکار سرویس را redeploy می‌کند (1-2 دقیقه)

#### گام 7.8: بررسی سلامت Backend

برای اطمینان از اینکه Backend درست کار می‌کند:

1. مرورگر خود را باز کنید
2. به این آدرس بروید:
```
https://firewall-bot-backend.onrender.com/healthz
```

3. اگر همه چیز درست باشد، پاسخ زیر را می‌بینید:
```json
{"status":"ok"}
```

✅ اگر این پاسخ را دیدید، Backend شما آماده است!  
❌ اگر خطا دیدید، به بخش **عیب‌یابی** بروید.

**✅ Backend شما آماده و در حال اجرا است!**

---

### 🔄 مرحله 8: بررسی Database Migrations

#### گام 8.1: چک کردن اتوماتیک Migrations

**⚠️ خبر خوب:** اگر در Build Command مرحله 7.3 دقیقاً همان دستور را وارد کرده باشید، migrations **خودکار** اجرا شده است!

برای اطمینان:

1. در صفحه Web Service، به تب **"Logs"** بروید
2. دنبال خطوط شبیه این باشید:

```
==> Running migrations...
Prisma Migrate applied the following migrations:

✓ 20240101000000_init
✓ 20240102000000_add_users
✓ 20240103000000_add_groups
✓ 20240104000000_add_firewall

Database is up to date.
```

3. اگر این خطوط را دیدید → ✅ **همه چیز عالی است!**

#### گام 8.2: در صورت خطا - اجرای دستی Migrations

اگر خطای **"table does not exist"** یا **"relation does not exist"** دیدید:

**راه حل 1: از Render Shell استفاده کنید**

1. در صفحه Web Service، از منوی سمت چپ، به تب **"Shell"** بروید
2. روی دکمه **"Launch Shell"** کلیک کنید
3. یک terminal تحت وب باز می‌شود
4. این دستورات را **به ترتیب** اجرا کنید:

```bash
npm run migrate:deploy
npx prisma generate
```

5. منتظر بمانید تا کامل شود
6. اگر پیام **"Database is up to date"** دیدید → ✅ موفق بودید!

**راه حل 2: از کامپیوتر خودتان (برای کاربران پیشرفته)**

اگر Git و Node.js روی کامپیوترتان نصب است:

```bash
# 1. Clone کردن repository
git clone https://github.com/your-username/telegram-firewall-bot.git
cd telegram-firewall-bot

# 2. نصب dependencies
npm install

# 3. تنظیم DATABASE_URL

# در ویندوز (Command Prompt):
set DATABASE_URL=postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot

# در ویندوز (PowerShell):
$env:DATABASE_URL="postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot"

# در Mac/Linux:
export DATABASE_URL="postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot"

# 4. اجرای migrations
npm run migrate:deploy

# 5. Generate Prisma Client
npx prisma generate
```

**✅ Database شما آماده است و جداول ساخته شدند!**

---

### 🤖 مرحله 9: تست اولیه ربات

#### گام 9.1: یافتن ربات در تلگرام
1. اپلیکیشن تلگرام خود را باز کنید
2. در Search بنویسید: `@MyFirewallBot` (username ربات خود را جایگزین کنید)
3. روی ربات کلیک کنید

#### گام 9.2: شروع ربات
1. دکمه آبی **"START"** را بزنید
2. اگر ربات پاسخ داد و یک پیام خوشامدگویی فرستاد → ✅ **عالی!**
3. اگر ربات پاسخ نداد → ⏸️ **صبر کنید 10-15 ثانیه** (پلن رایگان ممکن است اولین بار کمی کند باشد)

#### گام 9.3: تست Owner Panel
1. دستور `/panel` را تایپ کرده و ارسال کنید
2. اگر `BOT_OWNER_ID` درست باشد، یک پنل مدیریتی با دکمه‌ها باز می‌شود
3. اگر ربات گفت **"شما دسترسی ندارید"** → BOT_OWNER_ID را چک کنید

**✅ ربات شما زنده است و کار می‌کند!**

---

## 🌐 بخش چهارم: راه‌اندازی Mini App (داشبورد وب)

### 📱 مرحله 10: Deploy Mini App به عنوان Static Site

Mini App یک وب اپلیکیشن React است که باید به صورت **Static Site** منتشر شود.

#### گام 10.1: ایجاد Static Site جدید

1. به Dashboard اصلی Render برگردید
2. روی دکمه **"New +"** کلیک کنید
3. از منو، گزینه **"Static Site"** را انتخاب کنید
4. همان repository را که قبلاً وصل کردید، دوباره انتخاب کنید
5. روی **"Connect"** کلیک کنید

#### گام 10.2: پیکربندی Static Site

در صفحه فرم:

| فیلد | مقدار | توضیحات |
|------|-------|---------|
| **Name** | `firewall-bot-miniapp` | نام دلخواه - باید یکتا باشد |
| **Branch** | `main` یا `master` | همان branch اصلی |
| **Root Directory** | **خالی بگذارید** |  |
| **Build Command** | `npm install && npm run build` | **دقیقاً این را کپی کنید** |
| **Publish Directory** | `dist` | مسیر فایل‌های build شده |
| **Auto-Deploy** | Yes (فعال) | Deploy خودکار با هر push |

#### گام 10.3: تنظیم Environment Variables برای Mini App

در قسمت **"Advanced"** > **"Environment Variables"**:

⚠️ **مهم:** این متغیر برای **Build Time** است (هنگام ساخت پروژه):

```bash
Key:   VITE_API_BASE_URL
Value: https://firewall-bot-backend.onrender.com/api/v1
```

**توضیح:**
- این URL برای ارتباط Mini App با Backend استفاده می‌شود
- Vite (Build tool) از متغیرهای محیطی با پیشوند `VITE_` استفاده می‌کند
- **حتماً** `/api/v1` را در انتها بنویسید

⚠️ **توجه:** URL Backend خودتان را جایگزین کنید!

#### گام 10.4: ایجاد Static Site

1. همه چیز را چک کنید ✅
2. روی دکمه **"Create Static Site"** کلیک کنید
3. Render شروع به Build می‌کند (3-6 دقیقه)
4. منتظر بمانید تا وضعیت به **"Live"** تغییر کند

#### گام 10.5: دریافت URL Mini App

پس از Deploy موفق:

1. در بالای صفحه، URL را می‌بینید:
```
https://firewall-bot-miniapp.onrender.com
```

2. این URL را کپی کنید و ذخیره کنید

**🔴 مهم: این URL Mini App شماست!**

#### گام 10.6: تست Mini App

1. URL را در مرورگر باز کنید
2. باید صفحه Mini App را ببینید (ممکن است خطای API بگیرد - در مرحله بعد برطرف می‌شود)

**✅ Mini App شما Deploy شد!**

---

### 🔗 مرحله 11: اتصال Mini App به Backend

#### گام 11.1: تنظیم MINI_APP_URL در Backend

حالا باید Backend را مطلع کنیم که Mini App کجاست:

1. به صفحه **Web Service** (Backend) در Render برگردید
2. از منوی سمت چپ، به تب **"Environment"** بروید
3. روی **"Add Environment Variable"** کلیک کنید
4. متغیر جدید اضافه کنید:

```bash
Key:   MINI_APP_URL
Value: https://firewall-bot-miniapp.onrender.com
```

⚠️ **توجه:** از URL دقیق Static Site خود استفاده کنید!

5. روی **"Save Changes"** کلیک کنید
6. Render خودکار Backend را redeploy می‌کند (1-2 دقیقه)

#### گام 11.2: چک‌لیست متغیرهای محیطی Backend

در این مرحله، Backend شما باید **تمام** این متغیرها را داشته باشد:

```bash
✅ BOT_TOKEN = 1234567890:ABC...
✅ BOT_OWNER_ID = 123456789
✅ BOT_USERNAME = MyFirewallBot
✅ DATABASE_URL = postgresql://...
✅ BOT_START_MODE = webhook
✅ PORT = 3000
✅ WEBHOOK_DOMAIN = https://firewall-bot-backend.onrender.com
✅ MINI_APP_URL = https://firewall-bot-miniapp.onrender.com
```

برای چک کردن:
- تب **"Environment"** در صفحه Web Service
- همه متغیرها باید لیست شوند

---

### 📱 مرحله 12: تنظیم Menu Button در BotFather

حالا باید به ربات بگوییم که Mini App کجاست تا کاربران بتوانند از داخل تلگرام به آن دسترسی داشته باشند.

#### گام 12.1: باز کردن BotFather
1. به تلگرام بروید
2. `@BotFather` را جستجو کنید
3. وارد چت شوید

#### گام 12.2: دستور /mybots
1. دستور `/mybots` را ارسال کنید
2. BotFather لیست ربات‌های شما را نشان می‌دهد
3. روی ربات خود کلیک کنید (مثلاً `@MyFirewallBot`)

#### گام 12.3: تنظیم Menu Button
یک منوی Inline با دکمه‌ها باز می‌شود:

1. روی دکمه **"Bot Settings"** کلیک کنید
2. روی دکمه **"Menu Button"** کلیک کنید
3. روی دکمه **"Edit Menu Button"** کلیک کنید
4. BotFather می‌پرسد: **"Send me the URL for the menu button"**

#### گام 12.4: ارسال URL Mini App
URL Mini App خود را ارسال کنید:

```
https://firewall-bot-miniapp.onrender.com
```

⚠️ **توجه:** URL خودتان را ارسال کنید، نه این مثال!

#### گام 12.5: تایید
BotFather پیامی می‌فرستد:

```
✅ Success! Menu button URL updated.
```

**✅ Menu Button تنظیم شد!**

**📸 نکته:** حالا در چت ربات، یک دکمه Menu (☰) در کنار فیلد پیام نمایش داده می‌شود.

---

## ✅ بخش پنجم: تست نهایی و تایید عملکرد

### 🎯 مرحله 13: تست کامل ربات

#### گام 13.1: تست ربات در چت خصوصی
1. تلگرام خود را باز کنید
2. به ربات خود بروید (`@MyFirewallBot`)
3. دستور `/start` را بفرستید
4. ربات باید پیام خوشامدگویی با دکمه‌ها بفرستد
5. ✅ اگر پاسخ داد، مرحله اول موفق است!

#### گام 13.2: تست Owner Panel
1. دستور `/panel` را بفرستید
2. باید یک پنل مدیریتی با دکمه‌های Inline باز شود
3. روی دکمه‌ها کلیک کنید و عملکرد را تست کنید
4. ✅ اگر کار کرد، دسترسی Owner شما تایید است!

#### گام 13.3: تست Mini App از داخل تلگرام
1. در چت ربات، روی دکمه **Menu** (☰) در کنار فیلد پیام کلیک کنید
2. یا روی دکمه **"Management Panel"** (اگر وجود دارد) کلیک کنید
3. Mini App باید باز شود! 🎉
4. باید داشبورد زیبا با اطلاعات را ببینید
5. ✅ اگر باز شد و کار کرد، همه چیز عالی است!

#### گام 13.4: تست عملکرد Firewall در گروه

**الف) ساخت گروه تست:**
1. در تلگرام یک **گروه جدید** بسازید
2. نام آن را "Test Bot Group" بگذارید
3. از منوی گروه، **"Add Members"** را بزنید
4. ربات خود را جستجو کرده و اضافه کنید

**ب) دادن دسترسی Admin به ربات:**
1. به تنظیمات گروه بروید
2. روی **"Administrators"** کلیک کنید
3. روی **"Add Administrator"** کلیک کنید
4. ربات را انتخاب کنید
5. **تمام** دسترسی‌ها را فعال کنید (مخصوصاً Delete Messages و Ban Users)
6. روی **"Save"** کلیک کنید

**ج) تست Firewall:**
1. در گروه دستور `/start` بزنید
2. یک **لینک** بفرستید (مثلاً: `https://google.com`)
3. اگر Firewall فعال باشد، پیام پاک می‌شود ✅
4. یا ربات یک پیام هشدار می‌فرستد

**✅ اگر همه این مراحل کار کردند، ربات شما به طور کامل آماده است!**

---

## 🎉 تبریک! ربات شما آماده و آنلاین است!

### 📋 چک‌لیست نهایی:

#### Backend (Web Service)
- [x] ✅ حساب Render.com ساخته شد
- [x] ✅ دیتابیس PostgreSQL راه‌اندازی شد
- [x] ✅ Backend (Web Service) Deploy شد
- [x] ✅ همه 8 Environment Variable تنظیم شدند
- [x] ✅ Migrations اجرا شدند
- [x] ✅ `/healthz` پاسخ `{"status":"ok"}` می‌دهد

#### Frontend (Mini App)
- [x] ✅ Mini App (Static Site) Deploy شد
- [x] ✅ `VITE_API_BASE_URL` تنظیم شد
- [x] ✅ `MINI_APP_URL` در Backend ست شد
- [x] ✅ Mini App از داخل تلگرام باز می‌شود

#### Telegram Bot
- [x] ✅ ربات در تلگرام پاسخ می‌دهد
- [x] ✅ `/panel` کار می‌کند
- [x] ✅ Menu Button تنظیم شد
- [x] ✅ Firewall در گروه کار می‌کند

---

## 🆘 بخش ششم: عیب‌یابی و حل مشکلات رایج

### ❌ مشکل 1: ربات اصلاً پاسخ نمی‌دهد

**علائم:**
- وقتی `/start` می‌زنید، ربات جواب نمی‌دهد
- ربات offline به نظر می‌رسد
- هیچ واکنشی ندارد

**راه حل‌های گام به گام:**

**گام 1: بررسی وضعیت Web Service**
1. به Dashboard Render بروید
2. به صفحه Web Service بروید
3. بالای صفحه، وضعیت را ببینید:
   - ✅ اگر **"Live"** (سبز) است → سرویس در حال اجرا است
   - ⚠️ اگر **"Build Failed"** (قرمز) است → Build خطا داشته
   - ⏸️ اگر **"Suspended"** است → پلن رایگان تمام شده

**گام 2: بررسی Logs Backend**
1. در صفحه Web Service، تب **"Logs"** را باز کنید
2. دنبال خطاها باشید (خطوط قرمز)

**خطاهای رایج و راه حل:**

```
❌ Error: BOT_TOKEN is not defined
```
**راه حل:** متغیر `BOT_TOKEN` را در Environment Variables اضافه کنید.

```
❌ Error: connect ECONNREFUSED
❌ Error: Can't reach database server
```
**راه حل:** دیتابیس در دسترس نیست. به صفحه PostgreSQL بروید و مطمئن شوید Status = **Available** است.

```
❌ Error: relation "User" does not exist
❌ Error: table "Group" does not exist
```
**راه حل:** Migrations اجرا نشده‌اند. به مرحله 8 برگردید و دستی migrations را اجرا کنید.

```
❌ 401 Unauthorized
❌ Error: Invalid bot token
```
**راه حل:** `BOT_TOKEN` غلط است. دوباره از BotFather دریافت کنید.

**گام 3: Redeploy کردن (اگر همه چیز درست است)**
1. در صفحه Web Service، به تب **"Manual Deploy"** بروید
2. روی **"Deploy latest commit"** کلیک کنید
3. منتظر بمانید تا Deploy کامل شود (2-4 دقیقه)

**گام 4: بررسی Webhook تلگرام**
1. مرورگر خود را باز کنید
2. به این آدرس بروید (TOKEN خود را جایگزین کنید):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
```

مثال:
```
https://api.telegram.org/bot1234567890:ABC.../getWebhookInfo
```

3. خروجی باید شبیه این باشد:

```json
{
  "ok": true,
  "result": {
    "url": "https://firewall-bot-backend.onrender.com/telegram/webhook",
    "has_custom_certificate": false,
    "pending_update_count": 0,
    "last_error_date": 0
  }
}
```

4. چک کنید:
   - ✅ `url` باید URL Backend شما باشد
   - ✅ `pending_update_count` باید 0 باشد
   - ❌ اگر `last_error_date` وجود دارد، یک خطا رخ داده

5. اگر URL غلط بود یا خالی بود، دستی آن را ست کنید:

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://firewall-bot-backend.onrender.com/telegram/webhook
```

---

### ❌ مشکل 2: Mini App باز نمی‌شود

**علائم:**
- روی دکمه Menu یا Management Panel کلیک می‌کنید
- هیچ اتفاقی نمی‌افتد یا صفحه خالی نمایش می‌دهد
- یا خطای "Failed to load" می‌دهد

**راه حل‌های گام به گام:**

**گام 1: بررسی URL در BotFather**
1. به `@BotFather` بروید
2. `/mybots` → ربات خود → Bot Settings → Menu Button
3. چک کنید URL درست است:
```
https://firewall-bot-miniapp.onrender.com
```
4. اگر غلط است، روی **"Edit Menu Button"** کلیک کنید و URL صحیح را ارسال کنید

**گام 2: بررسی MINI_APP_URL در Backend**
1. به صفحه Web Service بروید
2. تب **"Environment"** را باز کنید
3. چک کنید متغیر `MINI_APP_URL` وجود دارد و درست است
4. اگر ندارد، آن را اضافه کنید و Save Changes بزنید

**گام 3: بررسی وضعیت Static Site**
1. به Dashboard Render بروید
2. به صفحه **Static Site** بروید
3. مطمئن شوید وضعیت **"Live"** (سبز) است
4. URL را در مرورگر باز کنید - باید صفحه Mini App را ببینید

**گام 4: Rebuild کردن Static Site**
1. در صفحه Static Site، به تب **"Manual Deploy"** بروید
2. روی **"Clear build cache & deploy"** کلیک کنید
3. منتظر بمانید تا rebuild کامل شود

---

### ❌ مشکل 3: خطای Database Connection

**علائم:**
```
Error: Can't reach database server
Error: Connection timeout
Error: password authentication failed
```

**راه حل‌های گام به گام:**

**گام 1: چک کردن وضعیت Database**
1. به صفحه **PostgreSQL** در Render بروید
2. بالای صفحه، وضعیت را ببینید:
   - ✅ **"Available"** → دیتابیس در حال کار است
   - ⏸️ **"Suspended"** → دیتابیس متوقف شده (پلن رایگان تمام شده)
3. اگر Suspended است:
   - روی **"Resume"** کلیک کنید
   - یا به پلن Paid ارتقا دهید

**گام 2: بررسی Connection String**
1. در صفحه PostgreSQL، تب **"Info"** را باز کنید
2. **External Database URL** را دوباره کپی کنید
3. به صفحه **Web Service** بروید
4. تب **"Environment"** → متغیر `DATABASE_URL` را پیدا کنید
5. روی **"Edit"** کلیک کنید
6. Connection String جدید را paste کنید
7. **"Save Changes"** بزنید

**گام 3: اجرای Migrations دوباره**
1. در صفحه Web Service، تب **"Shell"** را باز کنید
2. روی **"Launch Shell"** کلیک کنید
3. این دستورات را اجرا کنید:

```bash
npm run migrate:deploy
npx prisma generate
```

---

### ❌ مشکل 4: Mini App خطای API می‌دهد

**علائم:**
- Mini App باز می‌شود ولی داده‌ای نمایش نمی‌دهد
- در Console مرورگر (F12) خطای 404 یا 500 می‌بینید
- پیام "Failed to fetch" نمایش می‌دهد

**راه حل‌های گام به گام:**

**گام 1: بررسی VITE_API_BASE_URL**
1. به صفحه **Static Site** بروید
2. تب **"Environment"** را باز کنید
3. چک کنید `VITE_API_BASE_URL` درست است:
```
https://firewall-bot-backend.onrender.com/api/v1
```
4. **توجه:** حتماً `/api/v1` در انتها باشد!
5. اگر تغییر دادید، حتماً **Rebuild** کنید:
   - تب **"Manual Deploy"** → **"Clear build cache & deploy"**

**گام 2: تست Backend API**
در مرورگر به این آدرس بروید:

```
https://firewall-bot-backend.onrender.com/healthz
```

1. اگر پاسخ `{"status":"ok"}` دیدید → ✅ Backend کار می‌کند
2. اگر خطا دیدید یا timeout شد → ❌ Backend مشکل دارد
   - به Logs Backend نگاه کنید
   - Environment Variables را چک کنید

**گام 3: بررسی CORS**
اگر در Console مرورگر خطای CORS دیدید:
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

این به این معنی است که Backend به درستی CORS تنظیم نشده. این معمولاً خودکار حل می‌شود، ولی اگر مشکل ادامه داشت، به کد Backend نگاه کنید.

---

### ❌ مشکل 5: Render Free Plan - سرویس خوابیده (Sleeping)

**علائم:**
- ربات بعد از 15-30 دقیقه بی‌استفاده، پاسخ نمی‌دهد
- اولین پیام بعد از مدتی 30-60 ثانیه طول می‌کشد تا جواب بگیرد
- بعد از اولین پیام، بقیه سریع هستند

**توضیح:**
پلن رایگان Render بعد از **15 دقیقه بی‌استفاده**، سرویس Web Service را **Sleep** می‌کند تا منابع صرفه‌جویی شود. اولین درخواست بعد از Sleep، سرویس را بیدار می‌کند (Cold Start).

**راه حل‌های موقت (رایگان):**

**راه حل 1: استفاده از UptimeRobot (توصیه می‌شود)**

UptimeRobot یک سرویس رایگان است که به صورت دوره‌ای سرویس شما را پینگ می‌کند تا بیدار بماند:

1. به https://uptimerobot.com بروید
2. **"Sign Up for Free"** کلیک کنید و حساب بسازید
3. بعد از ورود، روی **"+ Add New Monitor"** کلیک کنید
4. تنظیمات زیر را وارد کنید:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** Firewall Bot Backend
   - **URL:** `https://firewall-bot-backend.onrender.com/healthz`
   - **Monitoring Interval:** 5 minutes (کمترین فاصله رایگان)
5. روی **"Create Monitor"** کلیک کنید

✅ حالا هر 5 دقیقه یک‌بار، UptimeRobot Backend شما را ping می‌کند و بیدار نگه می‌دارد!

**راه حل 2: استفاده از Cron-Job.org**

1. به https://cron-job.org بروید
2. حساب رایگان بسازید
3. یک Cron Job جدید بسازید:
   - URL: `https://firewall-bot-backend.onrender.com/healthz`
   - Interval: Every 5 minutes
4. فعال کنید

**راه حل دائمی (پولی):**

**Upgrade به Starter Plan:**
- **هزینه:** $7/ماه (حدود 210,000 تومان - بسته به نرخ ارز)
- **مزایا:**
  - سرویس همیشه بیدار می‌ماند (No Sleep)
  - منابع بیشتر (0.5 CPU، 512MB RAM)
  - عملکرد بهتر
  - پشتیبانی بهتر

برای Upgrade:
1. در صفحه Web Service، تب **"Settings"** را باز کنید
2. قسمت **"Instance Type"** را پیدا کنید
3. از **Free** به **Starter** تغییر دهید
4. روی **"Save Changes"** کلیک کنید

---

### ❌ مشکل 6: Build Failed (خطای Build)

**علائم:**
```
Build failed with exit code 1
npm ERR! Missing script: "build"
npm ERR! code 127
```

**راه حل‌های گام به گام:**

**برای Web Service (Backend):**

Build Command باید دقیقاً این باشد:
```bash
npm install && npm run migrate:deploy && npx prisma generate
```

اگر غلط است:
1. به صفحه Web Service بروید
2. تب **"Settings"** را باز کنید
3. قسمت **"Build Command"** را پیدا کنید
4. دستور بالا را کپی کنید و paste کنید
5. **"Save Changes"** بزنید

**برای Static Site (Mini App):**

Build Command باید این باشد:
```bash
npm install && npm run build
```

Publish Directory باید این باشد:
```
dist
```

اگر غلط است:
1. به صفحه Static Site بروید
2. تب **"Settings"** را باز کنید
3. هر دو را درست کنید
4. **"Save Changes"** بزنید
5. Manual Deploy → Clear build cache & deploy

---

### ❌ مشکل 7: Environment Variables کار نمی‌کنند

**علائم:**
- متغیرها را اضافه کرده‌اید ولی ربات نمی‌بیندشان
- خطاهای "undefined" یا "is not defined"

**راه حل:**

**برای Backend (Web Service):**
1. متغیرها را در تب **"Environment"** اضافه کنید (نه Settings!)
2. بعد از هر تغییر، **حتماً** روی **"Save Changes"** کلیک کنید
3. Render خودکار redeploy می‌کند - منتظر بمانید تا کامل شود
4. متغیرها **فوراً** در کد در دسترس نیستند - باید redeploy کامل شود

**برای Mini App (Static Site):**
1. متغیرها باید با `VITE_` شروع شوند (مثلاً `VITE_API_BASE_URL`)
2. متغیرها فقط در **Build Time** در دسترس هستند، نه Runtime
3. بعد از تغییر متغیر، **حتماً** Rebuild کنید:
   - تب **"Manual Deploy"** → **"Clear build cache & deploy"**
4. اگر rebuild نکنید، تغییرات اعمال نمی‌شوند!

---

### ❌ مشکل 8: همه چیز Deploy شده ولی کار نمی‌کند

**چک‌لیست جامع عیب‌یابی:**

```
✅ چک کنید: PostgreSQL
   1. Status = Available (سبز)
   2. External Database URL کپی شده
   
✅ چک کنید: Web Service (Backend)
   1. Status = Live (سبز)
   2. همه 8 Environment Variable درست هستند
   3. Build Command درست است
   4. /healthz پاسخ می‌دهد
   5. Logs خطای Critical ندارند
   
✅ چک کنید: Static Site (Mini App)
   1. Status = Live (سبز)
   2. Build Command و Publish Directory درست هستند
   3. VITE_API_BASE_URL درست است
   4. URL در مرورگر باز می‌شود
   
✅ چک کنید: Telegram
   1. BOT_TOKEN درست است
   2. BOT_OWNER_ID درست است
   3. Webhook تنظیم شده (با getWebhookInfo)
   4. Menu Button در BotFather تنظیم شده
   
✅ چک کنید: Database
   1. Migrations اجرا شده‌اند
   2. جداول ایجاد شده‌اند (با Prisma Studio یا psql)
   3. Connection String صحیح است
```

اگر همه ✅ بودند ولی باز کار نمی‌کند:
1. همه سرویس‌ها را Restart کنید
2. Cache مرورگر را پاک کنید (Ctrl+Shift+Del)
3. تلگرام را ببندید و دوباره باز کنید
4. 5-10 دقیقه صبر کنید (گاهی Propagation طول می‌کشد)

---

## 🔍 دستورات مفید برای Debug

### 1. بررسی اطلاعات Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
```

### 2. تنظیم دستی Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<BACKEND_URL>/telegram/webhook
```

### 3. پاک کردن Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/deleteWebhook
```

### 4. تست سلامت Backend
در مرورگر:
```
https://firewall-bot-backend.onrender.com/healthz
```

باید پاسخ دهد:
```json
{"status":"ok"}
```

### 5. تست API
در مرورگر:
```
https://firewall-bot-backend.onrender.com/api/v1/health
```

### 6. اتصال به Database از Local (برای کاربران پیشرفته)
```bash
psql "postgresql://user:pass@host/database"
```

---

## 📚 بخش هفتم: مراحل بعدی و بهینه‌سازی

### 🎨 سفارشی‌سازی ربات

حالا که ربات شما کار می‌کند، می‌توانید:

**1. تنظیم قوانین Firewall:**
- از دستور `/panel` استفاده کنید
- قوانین مدیریت لینک، رسانه و زبان را تنظیم کنید
- زمان‌بندی خاص برای قوانین مشخص کنید
- شدت مجازات‌ها را تنظیم کنید

**2. افزودن ربات به گروه‌های واقعی:**
- ربات را به گروه‌های خود اضافه کنید
- حتماً ربات را **Admin** کنید با این دسترسی‌ها:
  - ✅ Delete Messages (پاک کردن پیام‌ها)
  - ✅ Ban Users (مسدود کردن کاربران)
  - ✅ Invite Users (دعوت کاربران)
  - ✅ Pin Messages (سنجاق کردن پیام)

**3. استفاده از پنل Owner:**
- مدیریت Firewall Rules
- مشاهده آمار و گزارش‌ها
- تنظیم Panel Admins
- مدیریت Ban List
- آپلود Promo Slides
- Broadcast پیام به همه گروه‌ها

**4. فعال‌سازی سیستم Stars Payment:**
- از سیستم پرداخت Telegram Stars استفاده کنید
- اشتراک گروه‌ها را مدیریت کنید
- Giveaway برگزار کنید

---

### ⚡ بهینه‌سازی Performance

**1. Upgrade کردن Plans:**

| سرویس | Free Plan | Paid Plan (Starter) |
|-------|-----------|---------------------|
| **PostgreSQL** | 0.1 CPU، 256MB RAM، 1GB Storage | 0.25 CPU، 256MB RAM، 10GB Storage |
| **Web Service** | Auto-sleep بعد از 15 دقیقه، 0.1 CPU، 512MB RAM | همیشه فعال، 0.5 CPU، 512MB RAM |
| **Static Site** | رایگان همیشه، 100GB Bandwidth/ماه | رایگان همیشه، Unlimited |

**هزینه‌ها:**
- PostgreSQL: $7/ماه
- Web Service: $7/ماه
- **مجموع:** $14/ماه (حدود 420,000 تومان)

**ارزش Upgrade:**
- ✅ سرعت بهتر
- ✅ بدون Sleep
- ✅ Backup خودکار (PostgreSQL)
- ✅ پشتیبانی بهتر

**2. استفاده از Custom Domain:**

می‌توانید دامنه شخصی خود را وصل کنید:

**برای Backend:**
1. در صفحه Web Service → تب **"Settings"**
2. قسمت **"Custom Domain"** را پیدا کنید
3. دامنه خود را اضافه کنید (مثلاً `api.yourdomain.com`)
4. DNS records را طبق دستورالعمل تنظیم کنید:
```
CNAME api.yourdomain.com → firewall-bot-backend.onrender.com
```
5. SSL خودکار توسط Render فعال می‌شود

**برای Mini App:**
مشابه Backend (مثلاً `app.yourdomain.com`)

**3. تنظیم Auto-Deploy:**

Render به صورت پیش‌فرض هر بار که به GitHub push می‌کنید، خودکار deploy می‌کند.

برای غیرفعال کردن:
1. Settings → **"Auto-Deploy"** = **No**

برای فعال کردن deploy فقط از branch خاص:
1. Settings → **"Branch"** = `production` (یا هر branch دیگر)

**4. افزودن Health Check:**

Render به صورت خودکار health check انجام می‌دهد. می‌توانید آن را سفارشی کنید:

1. Settings → **"Health Check Path"**
2. مقدار: `/healthz`

---

### 🔐 امنیت و Backup

**1. Backup از Database:**

**روش دستی:**
```bash
# نصب postgresql-client
sudo apt-get install postgresql-client

# Backup گرفتن
pg_dump "postgresql://user:pass@host/db" > backup_$(date +%Y%m%d).sql
```

**روش خودکار (توصیه می‌شود):**
- Render در پلن Paid، backup خودکار **روزانه** دارد
- Backups را از صفحه PostgreSQL → تب **"Backups"** دانلود کنید

**سرویس‌های Third-Party:**
- [SimpleBackups](https://simplebackups.com) - $5/ماه
- [BackupNinja](https://backupninja.com) - رایگان تا 1GB

**2. محافظت از Environment Variables:**

⚠️ **هرگز:**
- ❌ فایل `.env` را در GitHub commit نکنید
- ❌ Secrets را در کد هاردکد نکنید
- ❌ TOKEN ها را در لاگ‌ها چاپ نکنید

✅ **همیشه:**
- ✅ از `.gitignore` استفاده کنید
- ✅ Secrets را فقط در Render Dashboard نگه دارید
- ✅ از `.env.example` برای template استفاده کنید

**3. تنظیم Webhook Secret (امنیت بیشتر):**

برای جلوگیری از درخواست‌های جعلی:

1. یک رشته تصادفی قوی بسازید (32-64 کاراکتر)
2. در Backend Environment Variables اضافه کنید:
```bash
BOT_WEBHOOK_SECRET = your_random_secret_here_abc123XYZ789
```
3. Save Changes و Redeploy

**4. مانیتورینگ:**

**از UptimeRobot برای monitoring استفاده کنید:**
- اگر Backend down شد، به شما ایمیل یا SMS می‌فرستد
- می‌توانید Response Time را track کنید
- رایگان تا 50 monitor

**تنظیم Alert:**
1. در UptimeRobot، روی monitor خود کلیک کنید
2. **"Alert Contacts"** را اضافه کنید (ایمیل، SMS، Telegram)
3. اگر سرویس down شد، فوراً متوجه می‌شوید

---

### 📊 مانیتورینگ و Logs

**1. مشاهده Logs در Render:**

**Backend Logs:**
- صفحه Web Service → تب **"Logs"**
- می‌توانید لاگ‌ها را فیلتر کنید:
  - All Logs
  - Errors Only
  - Build Logs
  - Deploy Logs
- می‌توانید لاگ‌ها را Search کنید

**Database Logs:**
- صفحه PostgreSQL → تب **"Logs"**
- Query های کند را ببینید
- خطاهای Connection را track کنید

**Static Site Logs:**
- صفحه Static Site → تب **"Logs"**
- Build logs و Deploy logs
- خطاهای Build را ببینید

**2. دانلود Logs:**

**روش 1: از Dashboard:**
- در صفحه Logs، روی **"Download"** کلیک کنید

**روش 2: با Render CLI:**
```bash
# نصب Render CLI
npm install -g @render-project/cli

# Login
render login

# دریافت logs
render logs <service-name>
```

**3. Metrics:**

در صفحه Overview هر سرویس، می‌توانید ببینید:
- CPU Usage
- Memory Usage
- Request Count
- Response Time

---

### 🚀 Scale کردن پروژه

وقتی پروژه شما بزرگ‌تر شد و ترافیک بیشتری دارید:

**1. افزایش Resources:**

**برای Web Service:**
1. صفحه Web Service → تب **"Settings"**
2. قسمت **"Instance Type"**
3. می‌توانید انتخاب کنید:
   - Starter: 0.5 CPU، 512MB RAM - $7/ماه
   - Standard: 1 CPU، 2GB RAM - $25/ماه
   - Pro: 2 CPU، 4GB RAM - $85/ماه

**برای PostgreSQL:**
1. صفحه PostgreSQL → تب **"Settings"**
2. قسمت **"Plan"**
3. می‌توانید upgrade کنید برای CPU، RAM و Storage بیشتر

**2. استفاده از Redis برای Cache:**

Render سرویس Redis رایگان دارد:

1. Dashboard → **"New +"** → **"Redis"**
2. نام: `firewall-bot-cache`
3. Plan: **Starter** (رایگان - 25MB)
4. Create کنید

**فواید Redis:**
- Cache کردن Firewall Rules (سرعت بیشتر)
- Session Management
- Rate Limiting
- Real-time Features

**3. جدا کردن Bot از API Server:**

برای Scale بهتر، می‌توانید دو Web Service جداگانه داشته باشید:

**Service 1: Bot Handler**
- فقط Telegram Bot
- پردازش پیام‌ها
- Firewall Engine

**Service 2: API Server**
- فقط API برای Mini App
- RESTful endpoints
- Dashboard data

**4. استفاده از Worker ها:**

برای کارهای سنگین:
- Image Processing
- Report Generation
- Bulk Operations

می‌توانید Background Jobs با **Render Background Worker** اجرا کنید.

---

### 🎓 یادگیری بیشتر

**مستندات رسمی:**
- [Render Documentation](https://render.com/docs) - راهنمای کامل Render
- [Telegram Bot API](https://core.telegram.org/bots/api) - API تلگرام
- [Prisma Documentation](https://www.prisma.io/docs) - ORM دیتابیس
- [React Documentation](https://react.dev) - کتابخانه React
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

**راهنماهای مفید:**
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps) - راهنمای Mini App
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Don%27t_Do_This)
- [Render Deploy Guides](https://render.com/docs/deploy-node-express-app)

**جوامع و پشتیبانی:**
- [Render Community](https://community.render.com)
- [Telegram Bot Developers](https://t.me/BotDevelopers)

---

### 💡 نکات و ترفندها

**1. توسعه محلی (Local Development):**

```bash
# نصب Dependencies
npm install

# راه‌اندازی PostgreSQL با Docker
docker-compose up -d postgres

# اجرای Migrations
npm run migrate:dev

# اجرای Bot در حالت Polling (برای Test)
npm run bot

# اجرای Mini App
npm run dev
```

**2. استفاده از Environment Files:**

```bash
# .env.example - Template (در Git)
BOT_TOKEN=your_bot_token_here
BOT_OWNER_ID=your_telegram_id
DATABASE_URL=postgresql://...

# .env - فایل واقعی (در .gitignore)
BOT_TOKEN=1234567890:ABC...
BOT_OWNER_ID=123456789
DATABASE_URL=postgresql://real_connection_string
```

**3. تست قبل از Deploy:**

همیشه در محیط local تست کنید:

```bash
# Build کردن Mini App
npm run build

# اگر بدون خطا build شد، آماده deploy است ✅
```

**4. Git Workflow:**

```bash
# Branch جدید برای feature
git checkout -b feature/new-feature

# تغییرات را commit کنید
git add .
git commit -m "feat: add new feature"

# Push به GitHub
git push origin feature/new-feature

# بعد از تست، merge به main
git checkout main
git merge feature/new-feature
git push origin main
```

**5. Script های مفید:**

**Script 1: Backup سریع Database:**
```bash
#!/bin/bash
# backup-db.sh
pg_dump "$DATABASE_URL" > "backup_$(date +%Y%m%d_%H%M%S).sql"
echo "✅ Backup created successfully!"
```

**Script 2: Health Check:**
```bash
#!/bin/bash
# health-check.sh
echo "🔍 Checking Backend..."
curl -f https://your-backend.onrender.com/healthz || echo "❌ Backend is down!"

echo "🔍 Checking Mini App..."
curl -f https://your-miniapp.onrender.com || echo "❌ Mini App is down!"
```

---

## 🏆 بهترین روش‌ها (Best Practices)

### ✅ چیزهایی که باید انجام دهید:

1. **Environment Variables را به درستی مدیریت کنید**
   - همه Secrets در Render Dashboard
   - هرگز در کد هاردکد نکنید

2. **از Git Branches استفاده کنید**
   - `main` برای production
   - `develop` برای development
   - Feature branches برای ویژگی‌های جدید

3. **قبل از Deploy تست کنید**
   - در محیط local تست کنید
   - Build را چک کنید
   - Logs را ببینید

4. **Backup منظم بگیرید**
   - روزانه از database
   - قبل از تغییرات بزرگ

5. **Logs را مرتباً بررسی کنید**
   - هر چند روز یک‌بار
   - بعد از Deploy
   - وقتی مشکلی گزارش می‌شود

6. **مستندات بنویسید**
   - تغییراتی که انجام دادید
   - Environment Variables جدید
   - نکات مهم

### ❌ چیزهایی که نباید انجام دهید:

1. **Secrets را در کد commit نکنید**
   - ❌ هرگز `.env` را push نکنید
   - ❌ TOKEN ها را در کد ننویسید

2. **مستقیماً روی branch اصلی تغییر ندهید**
   - ❌ مستقیم روی `main` commit نکنید
   - ✅ از feature branches استفاده کنید

3. **بدون تست deploy نکنید**
   - ❌ تغییرات را بدون تست push نکنید
   - ✅ همیشه local test کنید

4. **Database را بدون backup تغییر ندهید**
   - ❌ Migration های خطرناک بدون backup
   - ✅ قبل از هر تغییر backup بگیرید

5. **از Logging بی‌رویه استفاده نکنید**
   - ❌ هر چیزی را log نکنید
   - ❌ Sensitive data را log نکنید

---

## 📸 راهنمای تصویری مراحل

### تصویر 1: صفحه اصلی Render.com
```
┌───────────────────────────────────────────────────┐
│  RENDER                                            │
│  ┌─────────────────────────────────────────────┐  │
│  │  Cloud Application Hosting                  │  │
│  │  for Developers                             │  │
│  │                                              │  │
│  │  [Get Started Free] [Sign In]               │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Sign up with:                                     │
│  [GitHub] [GitLab] [Google] [Email]               │
└───────────────────────────────────────────────────┘
```

### تصویر 2: Dashboard بعد از ورود
```
┌───────────────────────────────────────────────────┐
│  Dashboard                              [New +]    │
│  ┌─────────────────────────────────────────────┐  │
│  │  You don't have any services yet            │  │
│  │                                              │  │
│  │  Get started by creating your first service │  │
│  │  [Create Web Service]                       │  │
│  │  [Create Static Site]                       │  │
│  │  [Create PostgreSQL]                        │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 3: منوی New +
```
┌─────────────────────────┐
│  New +                   │
│  ┌───────────────────┐  │
│  │  Web Service       │  │
│  │  Static Site       │  │
│  │  PostgreSQL        │  ◀── برای Database
│  │  Redis             │  │
│  │  Cron Job          │  │
│  │  Background Worker │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

### تصویر 4: فرم ساخت PostgreSQL
```
┌───────────────────────────────────────────────────┐
│  Create PostgreSQL Database                        │
│  ┌─────────────────────────────────────────────┐  │
│  │ Name: [firewall-bot-db____________]         │  │
│  │ Database: [firewall_bot____________]        │  │
│  │ Region: [Frankfurt (EU Central) ▼]         │  │
│  │ PostgreSQL Version: [16 ▼]                 │  │
│  │ Plan: [Free ▼]                              │  │
│  │                                              │  │
│  │ [Create Database]                           │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 5: Connection String
```
┌───────────────────────────────────────────────────┐
│  firewall-bot-db       ● Available                 │
│  ┌─────────────────────────────────────────────┐  │
│  │ Connections                                  │  │
│  │                                              │  │
│  │ External Database URL:                      │  │
│  │ postgresql://firewall_user:abc123XYZ...    │  │
│  │ @dpg-xxxx.frankfurt-postgres.render.com    │  │
│  │ /firewall_bot                               │  │
│  │ [📋 Copy]  ◀── این را کپی کنید            │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 6: فرم Web Service
```
┌───────────────────────────────────────────────────┐
│  Create Web Service                                │
│  ┌─────────────────────────────────────────────┐  │
│  │ Name: [firewall-bot-backend________]        │  │
│  │ Region: [Frankfurt (EU Central) ▼]         │  │
│  │ Branch: [main ▼]                            │  │
│  │ Runtime: [Node ▼]                           │  │
│  │                                              │  │
│  │ Build Command:                              │  │
│  │ npm install && npm run migrate:deploy      │  │
│  │ && npx prisma generate                     │  │
│  │                                              │  │
│  │ Start Command:                              │  │
│  │ npm run bot:webhook                         │  │
│  │                                              │  │
│  │ [▼ Advanced]                                │  │
│  │   Environment Variables: ...                │  │
│  │                                              │  │
│  │ [Create Web Service]                        │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 7: Environment Variables
```
┌───────────────────────────────────────────────────┐
│  Environment Variables                             │
│  ┌─────────────────────────────────────────────┐  │
│  │ BOT_TOKEN                                    │  │
│  │ 1234567890:ABCdefGHI...                     │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ BOT_OWNER_ID                                │  │
│  │ 123456789                                   │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ DATABASE_URL                                │  │
│  │ postgresql://...                            │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ [+ Add Environment Variable]                │  │
│  └─────────────────────────────────────────────┘  │
│  [Save Changes]                                   │
└───────────────────────────────────────────────────┘
```

### تصویر 8: Deploy Logs
```
┌───────────────────────────────────────────────────┐
│  firewall-bot-backend       ● Live                 │
│  Logs                                              │
│  ┌─────────────────────────────────────────────┐  │
│  │ 2025-01-20 10:30:15  Starting build...      │  │
│  │ 2025-01-20 10:30:16  ✓ Cloning repository   │  │
│  │ 2025-01-20 10:30:45  ✓ npm install complete │  │
│  │ 2025-01-20 10:31:20  ✓ Running migrations   │  │
│  │ 2025-01-20 10:31:35  ✓ Prisma generated     │  │
│  │ 2025-01-20 10:31:50  ✓ Build succeeded      │  │
│  │ 2025-01-20 10:32:00  Starting server...     │  │
│  │ 2025-01-20 10:32:05  ✓ Server listening     │  │
│  │ 2025-01-20 10:32:10  ✓ Webhook registered   │  │
│  │ 2025-01-20 10:32:15  ✓ Bot is running       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Your service is live at:                         │
│  https://firewall-bot-backend.onrender.com        │
└───────────────────────────────────────────────────┘
```

### تصویر 9: ربات در تلگرام
```
┌───────────────────────────────────────────────────┐
│  @MyFirewallBot                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │ 🤖 به ربات فایروال خوش آمدید!              │  │
│  │                                              │  │
│  │ این ربات برای مدیریت و محافظت از گروه‌های │  │
│  │ شما طراحی شده است.                          │  │
│  │                                              │  │
│  │ [➕ افزودن به گروه]                         │  │
│  │ [📱 پنل مدیریت]                             │  │
│  │ [📢 کانال ما]                               │  │
│  │ [ℹ️ دستورات]                                │  │
│  │                                              │  │
│  │ ────────────────────────────────────        │  │
│  │ پیام خود را بنویسید...      [☰ Menu]      │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 10: Mini App Dashboard
```
┌───────────────────────────────────────────────────┐
│  🔥 ربات فایروال                                  │
│  ┌─────────────────────────────────────────────┐  │
│  │ 👤 نام شما                                  │  │
│  │ 0 XP • اکانت رایگان                        │  │
│  │                                              │  │
│  │ ┌──────────────┐  ┌──────────────┐         │  │
│  │ │ گروه‌های فعال│  │ کل اعضا      │         │  │
│  │ │      3       │  │    1,245     │         │  │
│  │ └──────────────┘  └──────────────┘         │  │
│  │                                              │  │
│  │ 📱 گروه‌های من:                            │  │
│  │ ┌─────────────────────────────────────────┐ │  │
│  │ │ 💬 گروه تست              [فعال ✓]     │ │  │
│  │ │ 👥 125 عضو • 23 روز باقی‌مانده         │ │  │
│  │ │ [📊 آمار] [⚙️ تنظیمات]                  │ │  │
│  │ └─────────────────────────────────────────┘ │  │
│  │ [+ افزودن گروه جدید]                       │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

---

## 🎯 خلاصه کامل مراحل

| # | مرحله | زمان | وضعیت |
|---|--------|------|-------|
| 1️⃣ | دریافت BOT_TOKEN از BotFather | 2 دقیقه | ✅ |
| 2️⃣ | پیدا کردن User ID | 1 دقیقه | ✅ |
| 3️⃣ | انتخاب Username ربات | - | ✅ |
| 4️⃣ | ذخیره کد در GitHub | 3 دقیقه | ✅ |
| 5️⃣ | ساخت حساب Render.com | 3 دقیقه | ✅ |
| 6️⃣ | راه‌اندازی PostgreSQL | 5 دقیقه | ✅ |
| 7️⃣ | Deploy Backend (Web Service) | 7 دقیقه | ✅ |
| 8️⃣ | بررسی Migrations | 2 دقیقه | ✅ |
| 9️⃣ | تست اولیه ربات | 2 دقیقه | ✅ |
| 🔟 | Deploy Mini App (Static Site) | 6 دقیقه | ✅ |
| 1️⃣1️⃣ | اتصال Mini App به Backend | 2 دقیقه | ✅ |
| 1️⃣2️⃣ | تنظیم Menu Button | 2 دقیقه | ✅ |
| 1️⃣3️⃣ | تست نهایی کامل | 5 دقیقه | ✅ |

**⏱️ مجموع زمان:** 40-50 دقیقه

---

## ✅ چک‌لیست نهایی قبل از پایان

قبل از اینکه بگویید "تمام شد"، این موارد را **یک به یک** چک کنید:

### Backend (Web Service)
- [ ] Status = **Live** (سبز رنگ)
- [ ] Build موفق بوده (بدون خطا)
- [ ] همه 8 Environment Variable درست تنظیم شده:
  - [ ] BOT_TOKEN
  - [ ] BOT_OWNER_ID
  - [ ] BOT_USERNAME
  - [ ] DATABASE_URL
  - [ ] BOT_START_MODE = webhook
  - [ ] PORT = 3000
  - [ ] WEBHOOK_DOMAIN
  - [ ] MINI_APP_URL
- [ ] Logs بدون خطای Critical
- [ ] دستور `/healthz` پاسخ `{"status":"ok"}` می‌دهد

### Database (PostgreSQL)
- [ ] Status = **Available**
- [ ] External Connection String کپی شده
- [ ] Migrations اجرا شده‌اند
- [ ] جداول ایجاد شده‌اند (User، Group، FirewallRule، etc.)

### Mini App (Static Site)
- [ ] Status = **Live** (سبز رنگ)
- [ ] Build موفق بوده
- [ ] `VITE_API_BASE_URL` درست تنظیم شده
- [ ] URL در مرورگر باز می‌شود و صفحه نمایش داده می‌شود
- [ ] داده‌ها از API دریافت می‌شوند (بدون خطای 404)

### Telegram Bot
- [ ] Token از BotFather دریافت شده
- [ ] Owner ID صحیح است (از @userinfobot)
- [ ] ربات به پیام `/start` پاسخ می‌دهد
- [ ] دستور `/panel` کار می‌کند و پنل مدیریت باز می‌شود
- [ ] Menu Button در BotFather تنظیم شده

### Mini App Integration
- [ ] Menu Button URL در BotFather درست است
- [ ] `MINI_APP_URL` در Backend Environment Variables ست شده
- [ ] Mini App از داخل تلگرام (Menu Button) باز می‌شود
- [ ] API calls از Mini App به Backend موفق هستند
- [ ] داده‌ها در Dashboard نمایش داده می‌شوند

### Firewall و عملکرد کلی
- [ ] ربات در چت خصوصی پاسخ می‌دهد
- [ ] ربات در گروه تست فعال است و پیام می‌گیرد
- [ ] Firewall rules (اگر فعال است) کار می‌کنند
- [ ] Dashboard Mini App داده‌های گروه را نمایش می‌دهد
- [ ] Owner Panel تمام ویژگی‌ها را دارد

### امنیت و Monitoring (اختیاری ولی توصیه می‌شود)
- [ ] UptimeRobot یا سرویس مشابه تنظیم شده (برای جلوگیری از Sleep)
- [ ] Backup اولیه از Database گرفته شده
- [ ] `.env` در `.gitignore` است (Secrets در GitHub نیست)

---

## 📞 کمک و پشتیبانی

اگر در هر مرحله‌ای به مشکل برخوردید:

### 1. ابتدا خودتان بررسی کنید:
- **Logs را ببینید:** اکثر مشکلات در Logs مشخص هستند
- **Environment Variables را چک کنید:** 90% خطاها به خاطر متغیرهای غلط است
- **به بخش عیب‌یابی این راهنما مراجعه کنید:** احتمالاً مشکل شما آنجا توضیح داده شده

### 2. منابع کمک:
- **مستندات Render:** https://render.com/docs
- **Render Community:** https://community.render.com
- **مستندات Telegram Bot API:** https://core.telegram.org/bots/api
- **Stack Overflow:** جستجوی خطای خود

### 3. اطلاعات مورد نیاز برای دریافت کمک:
وقتی از کسی کمک می‌خواهید، این اطلاعات را آماده داشته باشید:
- نسخه Node.js: `node --version`
- متن کامل خطا از Logs
- مرحله‌ای که مشکل دارید
- چه کارهایی انجام داده‌اید

### 4. Checklist قبل از درخواست کمک:
- [ ] Logs Backend را بررسی کردم
- [ ] همه Environment Variables را چک کردم
- [ ] سرویس‌ها را Restart کردم
- [ ] به بخش عیب‌یابی این راهنما مراجعه کردم
- [ ] Google جستجو کردم
- [ ] 10-15 دقیقه صبر کردم (گاهی تغییرات زمان می‌برد)

---

## 📝 یادداشت‌های نهایی

### نکات مهم:
1. **صبور باشید:** Deploy اولین بار ممکن است 5-10 دقیقه طول بکشد
2. **دقیق باشید:** یک حرف اشتباه در Environment Variable می‌تواند همه چیز را خراب کند
3. **Backup بگیرید:** قبل از تغییرات بزرگ، حتماً backup دیتابیس بگیرید
4. **لاگ‌ها را بخوانید:** لاگ‌ها بهترین دوست شما هستند!
5. **تست کنید:** قبل از استفاده در گروه‌های واقعی، در گروه تست امتحان کنید

### محدودیت‌های Free Plan:
- **Web Service:** بعد از 15 دقیقه بی‌استفاده، Sleep می‌شود
- **PostgreSQL:** 90 روز رایگان، بعد $7/ماه
- **Bandwidth:** 100GB/ماه برای Static Site
- **Build Time:** 500 دقیقه/ماه برای تمام سرویس‌ها

### بعد از Deploy چه کار کنیم؟
1. **مانیتور کنید:** چند روز اول بیشتر لاگ‌ها را چک کنید
2. **تست کنید:** تمام ویژگی‌ها را در شرایط واقعی امتحان کنید
3. **بهینه کنید:** عملکرد را بررسی کنید و در صورت نیاز بهینه‌سازی کنید
4. **Backup بگیرید:** یک backup اولیه از database بگیرید
5. **سفارشی کنید:** ربات را طبق نیاز خود تنظیم کنید

---

## 🎊 تبریک! ربات شما کاملاً آماده است! 🎊

شما با موفقیت:
- ✅ یک ربات تلگرام قدرتمند با قابلیت Firewall ساختید
- ✅ یک Mini App زیبا با React deploy کردید
- ✅ یک دیتابیس PostgreSQL راه‌اندازی کردید
- ✅ همه چیز را روی Render.com به صورت حرفه‌ای deploy کردید

**حالا وقت آن است که:**
- 🎯 ربات را به گروه‌های خود اضافه کنید
- 🔥 Firewall Rules را تنظیم کنید
- 📊 از Dashboard برای مدیریت استفاده کنید
- 🚀 از قابلیت‌های پیشرفته لذت ببرید!

---

**💚 موفق و پیروز باشید! 💚**

**ساخته شده با ❤️ برای جامعه توسعه‌دهندگان ایرانی**

---

**📅 تاریخ بروزرسانی:** ژانویه 2025  
**🔢 نسخه راهنما:** 2.0  
**✍️ نویسنده:** تیم Emergent AI

---

## 📖 پیوست: مراجع سریع

### URLهای مهم:
- Render Dashboard: https://dashboard.render.com
- GitHub: https://github.com
- BotFather: https://t.me/BotFather
- UserInfoBot: https://t.me/userinfobot
- UptimeRobot: https://uptimerobot.com

### دستورات مفید:
```bash
# نصب Dependencies
npm install

# اجرای Migrations
npm run migrate:deploy

# Build کردن Mini App
npm run build

# اجرای Bot (Polling - برای Local)
npm run bot

# اجرای Bot (Webhook - برای Production)
npm run bot:webhook

# اجرای Mini App (Dev Mode)
npm run dev

# Deploy Worker به Cloudflare (اختیاری)
npm run worker:deploy
```

### Environment Variables کامل:
```bash
# ضروری
BOT_TOKEN=1234567890:ABCdefGHI...
BOT_OWNER_ID=123456789
BOT_USERNAME=MyFirewallBot
DATABASE_URL=postgresql://...
BOT_START_MODE=webhook
PORT=3000
WEBHOOK_DOMAIN=https://firewall-bot-backend.onrender.com
MINI_APP_URL=https://firewall-bot-miniapp.onrender.com

# اختیاری
NODE_ENV=production
BOT_WEBHOOK_SECRET=your_random_secret
HOST=0.0.0.0
WEBHOOK_PATH=/telegram/webhook
```

### Commands ربات:
```
/start - شروع ربات
/panel - پنل مدیریت Owner
/help - راهنما
/stats - آمار (در گروه)
```

---

**🙏 از صبر و دقت شما متشکریم!**

اگر این راهنما برای شما مفید بود، لطفاً آن را با دیگران به اشتراک بگذارید! 😊
Action: finish
Observation: حالا همه اطلاعات لازم رو دارم. بیا یک راهنمای بروزرسانی شده و جامع آماده کنم:
 Summary: # 🚀 راهنمای گام به گام: راه‌اندازی ربات تلگرام با Render.com (نسخه بروزرسانی شده 2025)

## ⚠️ مهم: این راهنما را **مرحله به مرحله** دنبال کنید

این راهنمای کامل شما را قدم به قدم برای راه‌اندازی کامل ربات Telegram Firewall با استفاده از **Render.com** همراهی می‌کند.

**⏱️ زمان تقریبی:** 40-50 دقیقه  
**🎯 سطح:** مبتدی تا متوسط  
**💰 هزینه:** رایگان (با محدودیت‌های پلن رایگان)

---

## 📋 پیش‌نیاز: چیزهایی که نیاز دارید

1. ✅ یک حساب Telegram فعال
2. ✅ یک حساب GitHub (برای ذخیره کد)
3. ✅ یک حساب Render.com (رایگان)
4. ✅ کامپیوتر با اینترنت پایدار
5. ✅ یک ایمیل معتبر (برای تایید حساب Render)
6. ✅ صبر و دقت (خیلی مهم! 😊)

---

## 📱 بخش اول: دریافت اطلاعات اولیه از تلگرام

### 🎯 مرحله 1: دریافت BOT TOKEN از BotFather

#### گام 1.1: باز کردن BotFather
1. اپلیکیشن تلگرام خود را باز کنید
2. در قسمت Search (جستجو) بنویسید: `@BotFather`
3. روی BotFather کلیک کنید (✅ تیک آبی دارد)
4. دکمه `START` را بزنید

#### گام 1.2: ساخت ربات جدید
1. دستور `/newbot` را تایپ کرده و ارسال کنید
2. BotFather پیامی می‌فرستد:  
   **"Alright, a new bot. How are we going to call it? Please choose a name for your bot."**
3. یک **نام فارسی یا انگلیسی** برای ربات انتخاب کنید  
   (مثلاً: `My Awesome Firewall Bot` یا `ربات فایروال من`)
4. Enter بزنید

#### گام 1.3: انتخاب Username برای ربات
1. BotFather می‌پرسد:  
   **"Good. Now let's choose a username for your bot. It must end in `bot`."**
2. یک **username انگلیسی** وارد کنید که حتماً با `bot` تمام شود  
   (مثلاً: `MyFirewallBot` یا `FirewallTestBot`)
3. ⚠️ **توجه**: Username باید یکتا باشد. اگر گرفته بود، یکی دیگر امتحان کنید
4. Enter بزنید

#### گام 1.4: دریافت Token ربات
پس از موفقیت، پیامی شبیه این دریافت می‌کنید:

```
Done! Congratulations on your new bot. You will find it at t.me/YourBotName. 

Use this token to access the HTTP API:
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890

Keep your token secure and store it safely, it can be used by anyone to control your bot.
```

**🔴 بسیار مهم: این TOKEN را کپی کنید و در Notepad یا یک جای امن ذخیره کنید!**

مثال TOKEN:
```
1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890
```

---

### 🆔 مرحله 2: پیدا کردن User ID خودتان

#### گام 2.1: باز کردن UserInfoBot
1. در تلگرام Search کنید: `@userinfobot`
2. روی ربات کلیک کنید
3. دکمه `START` را بزنید

#### گام 2.2: دریافت User ID
ربات فوراً پیامی شبیه این برایتان می‌فرستد:

```
Id: 123456789
First name: نام شما
Username: @yourusername
Language: fa
```

**🔴 مهم: عدد مقابل `Id:` را کپی کنید!**

مثال:
```
123456789
```

این عدد **شناسه عددی یکتا** شما در تلگرام است و به عنوان Owner ربات استفاده می‌شود.

---

### 📝 مرحله 3: انتخاب Username ربات

این مرحله انجام شده! Username ربات همان چیزی است که در مرحله 1.3 انتخاب کردید (بدون @).

مثال: اگر ربات شما `@MyFirewallBot` است، Username برابر است با:
```
MyFirewallBot
```

**📋 چک‌لیست اطلاعات:**
- [x] ✅ BOT_TOKEN (دریافت شده)
- [x] ✅ BOT_OWNER_ID (User ID شما)
- [x] ✅ BOT_USERNAME (Username ربات بدون @)

---

## 💾 بخش دوم: آماده‌سازی کد در GitHub

### 💻 مرحله 4: ذخیره کردن کد در GitHub

#### روش A: استفاده از دکمه "Save to GitHub" (ساده‌ترین روش)

1. در همین صفحه چت که هستید، پایین صفحه را ببینید
2. دکمه **"Save to GitHub"** را پیدا کنید و کلیک کنید
3. اگر حساب GitHub ندارید:
   - روی **"Sign up for GitHub"** کلیک کنید
   - یک حساب رایگان بسازید (با ایمیل خود)
   - ایمیل تایید را باز کنید و verify کنید
4. اسم repository را وارد کنید (مثلاً: `telegram-firewall-bot`)
5. روی **"Save"** کلیک کنید
6. منتظر بمانید تا عملیات کامل شود (10-30 ثانیه)

**✅ تبریک! کد شما در GitHub ذخیره شد!**

#### روش B: Clone از Repository موجود (برای کاربران پیشرفته)

اگر کد را از قبل دارید:

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
git push origin main
```

---

## ☁️ بخش سوم: راه‌اندازی سرویس‌ها در Render.com

### 🌐 مرحله 5: راه‌اندازی حساب Render.com

#### گام 5.1: ساخت حساب Render
1. به آدرس بروید: **https://render.com**
2. روی دکمه **"Get Started"** یا **"Sign Up"** کلیک کنید

#### گام 5.2: انتخاب روش ثبت‌نام
می‌توانید با یکی از روش‌های زیر ثبت‌نام کنید:

**روش 1: ثبت‌نام با GitHub (🌟 توصیه می‌شود)**
- روی **"Sign up with GitHub"** کلیک کنید
- Render درخواست دسترسی می‌کند
- روی **"Authorize Render"** کلیک کنید
- ✅ خیلی ساده و سریع!

**روش 2: ثبت‌نام با GitLab**
- مشابه GitHub
- مناسب اگر کد شما در GitLab است

**روش 3: ثبت‌نام با Email**
- ایمیل خود را وارد کنید
- رمز عبور قوی انتخاب کنید
- ایمیل تایید را چک کنید

#### گام 5.3: تایید ایمیل
1. به صندوق ایمیل خود بروید
2. ایمیلی از **Render** دریافت خواهید کرد
3. روی لینک **"Verify Email"** کلیک کنید
4. به صفحه Dashboard هدایت می‌شوید

**✅ حساب Render.com شما آماده است!**

#### گام 5.4: آشنایی با Dashboard
پس از ورود، یک صفحه خالی خواهید دید:

```
┌──────────────────────────────────────────┐
│  Welcome to Render!                       │
│  Let's deploy your first project         │
│                                           │
│  [New +]                                 │
└──────────────────────────────────────────┘
```

---

### 🗄️ مرحله 6: راه‌اندازی دیتابیس PostgreSQL

**⚠️ نکته مهم:** این پروژه از **PostgreSQL** استفاده می‌کند، نه MongoDB!

#### گام 6.1: ساخت PostgreSQL Database
1. در Dashboard رندر، در گوشه بالا سمت راست، روی دکمه آبی **"New +"** کلیک کنید
2. از منوی باز شده، گزینه **"PostgreSQL"** را انتخاب کنید
3. یک صفحه فرم با عنوان "Create PostgreSQL" باز می‌شود

#### گام 6.2: پر کردن اطلاعات دیتابیس

در صفحه فرم، فیلدهای زیر را پر کنید:

| فیلد | مقدار پیشنهادی | توضیحات |
|------|----------------|---------|
| **Name** | `firewall-bot-db` | نام دلخواه برای database |
| **Database** | `firewall_bot` | خودکار پر می‌شود |
| **User** | `firewall_user` | خودکار پر می‌شود |
| **Region** | انتخاب نزدیک‌ترین منطقه | مثلاً `Frankfurt (EU Central)` برای خاورمیانه |
| **PostgreSQL Version** | **16** (آخرین نسخه) | پیشنهاد: از نسخه 16 استفاده کنید |
| **Instance Type** | Shared |  |
| **Plan** | **Free** | 🎁 رایگان - 0.1 CPU، 256MB RAM |

**📝 نکته درباره Region:**
- برای ایران، قطر و خاورمیانه: `Frankfurt (EU Central)` ✅
- برای ترکیه: `Frankfurt` یا `London` ✅
- برای آمریکای شمالی: `Oregon (US West)` یا `Ohio (US East)`

#### گام 6.3: ایجاد دیتابیس
1. روی دکمه سبز **"Create Database"** (پایین صفحه) کلیک کنید
2. منتظر بمانید تا دیتابیس ایجاد شود (معمولاً 1-3 دقیقه)
3. وضعیت از `Creating...` به `Available` تغییر می‌کند

#### گام 6.4: دریافت Connection String (🔑 مهم!)

پس از ایجاد موفق، صفحه Info دیتابیس باز می‌شود:

1. در منوی بالا، تب **"Info"** را باز کنید (اگر قبلاً باز نیست)
2. به قسمت **"Connections"** بروید
3. دو نوع Connection String خواهید دید:

**الف) Internal Database URL:**
```
postgresql://firewall_user:xxxx@dpg-xxxx-a.frankfurt-postgres.render.internal/firewall_bot
```
⚠️ این فقط برای سرویس‌های داخلی Render است

**ب) External Database URL:** (👈 **این را باید کپی کنید!**)
```
postgresql://firewall_user:password123ABC@dpg-xxxxxxxxx-a.frankfurt-postgres.render.com/firewall_bot
```
✅ این برای اتصال از بیرون است

4. روی آیکون 📋 کنار **"External Database URL"** کلیک کنید تا کپی شود
5. آن را در یک فایل Notepad یا Text Editor ذخیره کنید

**🔴 بسیار مهم:**
- 🔒 این رشته شامل username، password و آدرس دیتابیس است
- 🚫 **هرگز** این رشته را در GitHub یا جای عمومی قرار ندهید
- 📋 آن را در جای امن نگه دارید

**مثال واقعی:**
```
postgresql://firewall_user:abc123XYZ456def789@dpg-ck7s8d9k8g0s73e4v5g0-a.frankfurt-postgres.render.com/firewall_bot
```

**✅ دیتابیس PostgreSQL شما آماده شد!**

---

### 🔧 مرحله 7: راه‌اندازی Backend (Web Service)

Backend یا همان سرور ربات باید روی یک سرور اجرا شود. در Render از **Web Service** استفاده می‌کنیم.

#### گام 7.1: ایجاد Web Service جدید
1. به Dashboard اصلی Render برگردید (https://dashboard.render.com)
2. روی دکمه **"New +"** کلیک کنید
3. از منو، گزینه **"Web Service"** را انتخاب کنید
4. صفحه **"Connect a repository"** باز می‌شود

#### گام 7.2: اتصال Repository از GitHub

**حالت 1: اگر repository را می‌بینید**
1. لیست repository های GitHub شما نمایش داده می‌شود
2. repository ای که در مرحله 4 ساختید را پیدا کنید (مثلاً `telegram-firewall-bot`)
3. روی دکمه **"Connect"** کنار نام repository کلیک کنید

**حالت 2: اگر repository را نمی‌بینید**
1. روی **"Configure account"** کلیک کنید
2. GitHub به شما نشان می‌دهد Render به چه repository هایی دسترسی دارد
3. **"Select repositories"** یا **"All repositories"** را انتخاب کنید
4. روی **"Save"** کلیک کنید
5. به Render برگردید و repository را پیدا کنید

#### گام 7.3: پیکربندی Web Service

بعد از Connect کردن، یک فرم با فیلدهای زیادی نمایش داده می‌شود:

**📋 جدول تنظیمات:**

| فیلد | مقدار | توضیحات |
|------|-------|---------|
| **Name** | `firewall-bot-backend` | نام دلخواه - باید یکتا باشد |
| **Region** | همان Region دیتابیس | مثلاً `Frankfurt (EU Central)` |
| **Branch** | `main` یا `master` | branch اصلی repository |
| **Root Directory** | **خالی بگذارید** | اگر کد در root است |
| **Runtime** | **Node** | انتخاب کنید |
| **Build Command** | `npm install && npm run migrate:deploy && npx prisma generate` | **دقیقاً این را کپی کنید** ⬇️ |
| **Start Command** | `npm run bot:webhook` | دستور شروع ربات |
| **Instance Type** | Free | رایگان - 0.1 CPU، 512MB RAM |

**⚠️ توضیح Build Command:**
این دستور سه کار انجام می‌دهد:
1. `npm install` → نصب کتابخانه‌های Node.js
2. `npm run migrate:deploy` → اجرای migrations دیتابیس
3. `npx prisma generate` → ساخت Prisma Client

**🔴 بسیار مهم:** Build Command را **دقیقاً** همین‌طور کپی کنید، وگرنه ربات کار نمی‌کند!

#### گام 7.4: تنظیم Environment Variables (متغیرهای محیطی)

قبل از Create کردن، به پایین صفحه بروید و قسمت **"Advanced"** را باز کنید.

در بخش **"Environment Variables"**، این متغیرها را **یکی یکی** اضافه کنید:

**چگونه Environment Variable اضافه کنیم؟**
1. روی **"Add Environment Variable"** کلیک کنید
2. در فیلد **"Key"** نام متغیر را بنویسید
3. در فیلد **"Value"** مقدار را وارد کنید
4. دوباره روی **"Add Environment Variable"** کلیک کنید و برای متغیر بعدی تکرار کنید

**📋 لیست متغیرهای ضروری:**

```bash
# 1. توکن ربات (از مرحله 1)
Key:   BOT_TOKEN
Value: 1234567890:ABCdefGHIjklMNOpqrsTUVwxyz1234567890

# 2. شناسه مالک (از مرحله 2)
Key:   BOT_OWNER_ID
Value: 123456789

# 3. یوزرنیم ربات (از مرحله 3، بدون @)
Key:   BOT_USERNAME
Value: MyFirewallBot

# 4. آدرس دیتابیس (از مرحله 6.4)
Key:   DATABASE_URL
Value: postgresql://firewall_user:abc123XYZ...@dpg-xxx.render.com/firewall_bot

# 5. حالت اجرای ربات
Key:   BOT_START_MODE
Value: webhook

# 6. پورت سرور (برای Render باید 3000 باشد)
Key:   PORT
Value: 3000

# 7. محیط اجرا (اختیاری)
Key:   NODE_ENV
Value: production
```

**🔴 توجه:** مقادیر بالا فقط **مثال** هستند! از مقادیر **واقعی خودتان** استفاده کنید.

**❓ یادتان رفت کدام مقدار چه بود؟**
- `BOT_TOKEN` → مرحله 1.4 (از BotFather)
- `BOT_OWNER_ID` → مرحله 2.2 (از @userinfobot)
- `BOT_USERNAME` → مرحله 1.3 (بدون @)
- `DATABASE_URL` → مرحله 6.4 (External Database URL)

#### گام 7.5: ایجاد و Deploy اولیه

1. همه چیز را دوباره چک کنید ✅
2. روی دکمه سبز **"Create Web Service"** (پایین صفحه) کلیک کنید
3. Render شروع به Build و Deploy می‌کند

**⏱️ این فرآیند 3-7 دقیقه طول می‌کشد. صبور باشید!**

**📊 در این مدت چه اتفاقی می‌افتد؟**
- Render کد شما را از GitHub دانلود می‌کند
- Dependencies نصب می‌شوند (`npm install`)
- Database migrations اجرا می‌شوند
- Prisma Client ساخته می‌شود
- سرور راه‌اندازی می‌شود

**چگونه پیشرفت را ببینیم؟**
1. در تب **"Logs"** می‌توانید لاگ‌ها را ببینید
2. خطوط سبز ✅ یعنی موفق
3. خطوط قرمز ❌ یعنی خطا (در بخش عیب‌یابی توضیح داده شده)

#### گام 7.6: دریافت URL Backend

پس از Deploy موفق، وضعیت به **"Live"** (سبز) تغییر می‌کند:

1. در بالای صفحه، یک URL به شما نمایش داده می‌شود:
```
https://firewall-bot-backend.onrender.com
```

2. این URL را کپی کنید و در Notepad ذخیره کنید

**🔴 مهم: این URL را نگه دارید - در مراحل بعدی به آن نیاز دارید!**

#### گام 7.7: تنظیم WEBHOOK_DOMAIN

حالا باید URL Backend را به عنوان متغیر محیطی اضافه کنیم:

1. در صفحه Web Service، از منوی سمت چپ، به تب **"Environment"** بروید
2. روی **"Add Environment Variable"** کلیک کنید
3. یک متغیر جدید اضافه کنید:

```bash
Key:   WEBHOOK_DOMAIN
Value: https://firewall-bot-backend.onrender.com
```

⚠️ **توجه:** URL خودتان را وارد کنید، نه این مثال!

4. روی **"Save Changes"** کلیک کنید
5. Render خودکار سرویس را redeploy می‌کند (1-2 دقیقه)

#### گام 7.8: بررسی سلامت Backend

برای اطمینان از اینکه Backend درست کار می‌کند:

1. مرورگر خود را باز کنید
2. به این آدرس بروید:
```
https://firewall-bot-backend.onrender.com/healthz
```

3. اگر همه چیز درست باشد، پاسخ زیر را می‌بینید:
```json
{"status":"ok"}
```

✅ اگر این پاسخ را دیدید، Backend شما آماده است!  
❌ اگر خطا دیدید، به بخش **عیب‌یابی** بروید.

**✅ Backend شما آماده و در حال اجرا است!**

---

### 🔄 مرحله 8: بررسی Database Migrations

#### گام 8.1: چک کردن اتوماتیک Migrations

**⚠️ خبر خوب:** اگر در Build Command مرحله 7.3 دقیقاً همان دستور را وارد کرده باشید، migrations **خودکار** اجرا شده است!

برای اطمینان:

1. در صفحه Web Service، به تب **"Logs"** بروید
2. دنبال خطوط شبیه این باشید:

```
==> Running migrations...
Prisma Migrate applied the following migrations:

✓ 20240101000000_init
✓ 20240102000000_add_users
✓ 20240103000000_add_groups
✓ 20240104000000_add_firewall

Database is up to date.
```

3. اگر این خطوط را دیدید → ✅ **همه چیز عالی است!**

#### گام 8.2: در صورت خطا - اجرای دستی Migrations

اگر خطای **"table does not exist"** یا **"relation does not exist"** دیدید:

**راه حل 1: از Render Shell استفاده کنید**

1. در صفحه Web Service، از منوی سمت چپ، به تب **"Shell"** بروید
2. روی دکمه **"Launch Shell"** کلیک کنید
3. یک terminal تحت وب باز می‌شود
4. این دستورات را **به ترتیب** اجرا کنید:

```bash
npm run migrate:deploy
npx prisma generate
```

5. منتظر بمانید تا کامل شود
6. اگر پیام **"Database is up to date"** دیدید → ✅ موفق بودید!

**راه حل 2: از کامپیوتر خودتان (برای کاربران پیشرفته)**

اگر Git و Node.js روی کامپیوترتان نصب است:

```bash
# 1. Clone کردن repository
git clone https://github.com/your-username/telegram-firewall-bot.git
cd telegram-firewall-bot

# 2. نصب dependencies
npm install

# 3. تنظیم DATABASE_URL

# در ویندوز (Command Prompt):
set DATABASE_URL=postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot

# در ویندوز (PowerShell):
$env:DATABASE_URL="postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot"

# در Mac/Linux:
export DATABASE_URL="postgresql://firewall_user:password@dpg-xxx.render.com/firewall_bot"

# 4. اجرای migrations
npm run migrate:deploy

# 5. Generate Prisma Client
npx prisma generate
```

**✅ Database شما آماده است و جداول ساخته شدند!**

---

### 🤖 مرحله 9: تست اولیه ربات

#### گام 9.1: یافتن ربات در تلگرام
1. اپلیکیشن تلگرام خود را باز کنید
2. در Search بنویسید: `@MyFirewallBot` (username ربات خود را جایگزین کنید)
3. روی ربات کلیک کنید

#### گام 9.2: شروع ربات
1. دکمه آبی **"START"** را بزنید
2. اگر ربات پاسخ داد و یک پیام خوشامدگویی فرستاد → ✅ **عالی!**
3. اگر ربات پاسخ نداد → ⏸️ **صبر کنید 10-15 ثانیه** (پلن رایگان ممکن است اولین بار کمی کند باشد)

#### گام 9.3: تست Owner Panel
1. دستور `/panel` را تایپ کرده و ارسال کنید
2. اگر `BOT_OWNER_ID` درست باشد، یک پنل مدیریتی با دکمه‌ها باز می‌شود
3. اگر ربات گفت **"شما دسترسی ندارید"** → BOT_OWNER_ID را چک کنید

**✅ ربات شما زنده است و کار می‌کند!**

---

## 🌐 بخش چهارم: راه‌اندازی Mini App (داشبورد وب)

### 📱 مرحله 10: Deploy Mini App به عنوان Static Site

Mini App یک وب اپلیکیشن React است که باید به صورت **Static Site** منتشر شود.

#### گام 10.1: ایجاد Static Site جدید

1. به Dashboard اصلی Render برگردید
2. روی دکمه **"New +"** کلیک کنید
3. از منو، گزینه **"Static Site"** را انتخاب کنید
4. همان repository را که قبلاً وصل کردید، دوباره انتخاب کنید
5. روی **"Connect"** کلیک کنید

#### گام 10.2: پیکربندی Static Site

در صفحه فرم:

| فیلد | مقدار | توضیحات |
|------|-------|---------|
| **Name** | `firewall-bot-miniapp` | نام دلخواه - باید یکتا باشد |
| **Branch** | `main` یا `master` | همان branch اصلی |
| **Root Directory** | **خالی بگذارید** |  |
| **Build Command** | `npm install && npm run build` | **دقیقاً این را کپی کنید** |
| **Publish Directory** | `dist` | مسیر فایل‌های build شده |
| **Auto-Deploy** | Yes (فعال) | Deploy خودکار با هر push |

#### گام 10.3: تنظیم Environment Variables برای Mini App

در قسمت **"Advanced"** > **"Environment Variables"**:

⚠️ **مهم:** این متغیر برای **Build Time** است (هنگام ساخت پروژه):

```bash
Key:   VITE_API_BASE_URL
Value: https://firewall-bot-backend.onrender.com/api/v1
```

**توضیح:**
- این URL برای ارتباط Mini App با Backend استفاده می‌شود
- Vite (Build tool) از متغیرهای محیطی با پیشوند `VITE_` استفاده می‌کند
- **حتماً** `/api/v1` را در انتها بنویسید

⚠️ **توجه:** URL Backend خودتان را جایگزین کنید!

#### گام 10.4: ایجاد Static Site

1. همه چیز را چک کنید ✅
2. روی دکمه **"Create Static Site"** کلیک کنید
3. Render شروع به Build می‌کند (3-6 دقیقه)
4. منتظر بمانید تا وضعیت به **"Live"** تغییر کند

#### گام 10.5: دریافت URL Mini App

پس از Deploy موفق:

1. در بالای صفحه، URL را می‌بینید:
```
https://firewall-bot-miniapp.onrender.com
```

2. این URL را کپی کنید و ذخیره کنید

**🔴 مهم: این URL Mini App شماست!**

#### گام 10.6: تست Mini App

1. URL را در مرورگر باز کنید
2. باید صفحه Mini App را ببینید (ممکن است خطای API بگیرد - در مرحله بعد برطرف می‌شود)

**✅ Mini App شما Deploy شد!**

---

### 🔗 مرحله 11: اتصال Mini App به Backend

#### گام 11.1: تنظیم MINI_APP_URL در Backend

حالا باید Backend را مطلع کنیم که Mini App کجاست:

1. به صفحه **Web Service** (Backend) در Render برگردید
2. از منوی سمت چپ، به تب **"Environment"** بروید
3. روی **"Add Environment Variable"** کلیک کنید
4. متغیر جدید اضافه کنید:

```bash
Key:   MINI_APP_URL
Value: https://firewall-bot-miniapp.onrender.com
```

⚠️ **توجه:** از URL دقیق Static Site خود استفاده کنید!

5. روی **"Save Changes"** کلیک کنید
6. Render خودکار Backend را redeploy می‌کند (1-2 دقیقه)

#### گام 11.2: چک‌لیست متغیرهای محیطی Backend

در این مرحله، Backend شما باید **تمام** این متغیرها را داشته باشد:

```bash
✅ BOT_TOKEN = 1234567890:ABC...
✅ BOT_OWNER_ID = 123456789
✅ BOT_USERNAME = MyFirewallBot
✅ DATABASE_URL = postgresql://...
✅ BOT_START_MODE = webhook
✅ PORT = 3000
✅ WEBHOOK_DOMAIN = https://firewall-bot-backend.onrender.com
✅ MINI_APP_URL = https://firewall-bot-miniapp.onrender.com
```

برای چک کردن:
- تب **"Environment"** در صفحه Web Service
- همه متغیرها باید لیست شوند

---

### 📱 مرحله 12: تنظیم Menu Button در BotFather

حالا باید به ربات بگوییم که Mini App کجاست تا کاربران بتوانند از داخل تلگرام به آن دسترسی داشته باشند.

#### گام 12.1: باز کردن BotFather
1. به تلگرام بروید
2. `@BotFather` را جستجو کنید
3. وارد چت شوید

#### گام 12.2: دستور /mybots
1. دستور `/mybots` را ارسال کنید
2. BotFather لیست ربات‌های شما را نشان می‌دهد
3. روی ربات خود کلیک کنید (مثلاً `@MyFirewallBot`)

#### گام 12.3: تنظیم Menu Button
یک منوی Inline با دکمه‌ها باز می‌شود:

1. روی دکمه **"Bot Settings"** کلیک کنید
2. روی دکمه **"Menu Button"** کلیک کنید
3. روی دکمه **"Edit Menu Button"** کلیک کنید
4. BotFather می‌پرسد: **"Send me the URL for the menu button"**

#### گام 12.4: ارسال URL Mini App
URL Mini App خود را ارسال کنید:

```
https://firewall-bot-miniapp.onrender.com
```

⚠️ **توجه:** URL خودتان را ارسال کنید، نه این مثال!

#### گام 12.5: تایید
BotFather پیامی می‌فرستد:

```
✅ Success! Menu button URL updated.
```

**✅ Menu Button تنظیم شد!**

**📸 نکته:** حالا در چت ربات، یک دکمه Menu (☰) در کنار فیلد پیام نمایش داده می‌شود.

---

## ✅ بخش پنجم: تست نهایی و تایید عملکرد

### 🎯 مرحله 13: تست کامل ربات

#### گام 13.1: تست ربات در چت خصوصی
1. تلگرام خود را باز کنید
2. به ربات خود بروید (`@MyFirewallBot`)
3. دستور `/start` را بفرستید
4. ربات باید پیام خوشامدگویی با دکمه‌ها بفرستد
5. ✅ اگر پاسخ داد، مرحله اول موفق است!

#### گام 13.2: تست Owner Panel
1. دستور `/panel` را بفرستید
2. باید یک پنل مدیریتی با دکمه‌های Inline باز شود
3. روی دکمه‌ها کلیک کنید و عملکرد را تست کنید
4. ✅ اگر کار کرد، دسترسی Owner شما تایید است!

#### گام 13.3: تست Mini App از داخل تلگرام
1. در چت ربات، روی دکمه **Menu** (☰) در کنار فیلد پیام کلیک کنید
2. یا روی دکمه **"Management Panel"** (اگر وجود دارد) کلیک کنید
3. Mini App باید باز شود! 🎉
4. باید داشبورد زیبا با اطلاعات را ببینید
5. ✅ اگر باز شد و کار کرد، همه چیز عالی است!

#### گام 13.4: تست عملکرد Firewall در گروه

**الف) ساخت گروه تست:**
1. در تلگرام یک **گروه جدید** بسازید
2. نام آن را "Test Bot Group" بگذارید
3. از منوی گروه، **"Add Members"** را بزنید
4. ربات خود را جستجو کرده و اضافه کنید

**ب) دادن دسترسی Admin به ربات:**
1. به تنظیمات گروه بروید
2. روی **"Administrators"** کلیک کنید
3. روی **"Add Administrator"** کلیک کنید
4. ربات را انتخاب کنید
5. **تمام** دسترسی‌ها را فعال کنید (مخصوصاً Delete Messages و Ban Users)
6. روی **"Save"** کلیک کنید

**ج) تست Firewall:**
1. در گروه دستور `/start` بزنید
2. یک **لینک** بفرستید (مثلاً: `https://google.com`)
3. اگر Firewall فعال باشد، پیام پاک می‌شود ✅
4. یا ربات یک پیام هشدار می‌فرستد

**✅ اگر همه این مراحل کار کردند، ربات شما به طور کامل آماده است!**

---

## 🎉 تبریک! ربات شما آماده و آنلاین است!

### 📋 چک‌لیست نهایی:

#### Backend (Web Service)
- [x] ✅ حساب Render.com ساخته شد
- [x] ✅ دیتابیس PostgreSQL راه‌اندازی شد
- [x] ✅ Backend (Web Service) Deploy شد
- [x] ✅ همه 8 Environment Variable تنظیم شدند
- [x] ✅ Migrations اجرا شدند
- [x] ✅ `/healthz` پاسخ `{"status":"ok"}` می‌دهد

#### Frontend (Mini App)
- [x] ✅ Mini App (Static Site) Deploy شد
- [x] ✅ `VITE_API_BASE_URL` تنظیم شد
- [x] ✅ `MINI_APP_URL` در Backend ست شد
- [x] ✅ Mini App از داخل تلگرام باز می‌شود

#### Telegram Bot
- [x] ✅ ربات در تلگرام پاسخ می‌دهد
- [x] ✅ `/panel` کار می‌کند
- [x] ✅ Menu Button تنظیم شد
- [x] ✅ Firewall در گروه کار می‌کند

---

## 🆘 بخش ششم: عیب‌یابی و حل مشکلات رایج

### ❌ مشکل 1: ربات اصلاً پاسخ نمی‌دهد

**علائم:**
- وقتی `/start` می‌زنید، ربات جواب نمی‌دهد
- ربات offline به نظر می‌رسد
- هیچ واکنشی ندارد

**راه حل‌های گام به گام:**

**گام 1: بررسی وضعیت Web Service**
1. به Dashboard Render بروید
2. به صفحه Web Service بروید
3. بالای صفحه، وضعیت را ببینید:
   - ✅ اگر **"Live"** (سبز) است → سرویس در حال اجرا است
   - ⚠️ اگر **"Build Failed"** (قرمز) است → Build خطا داشته
   - ⏸️ اگر **"Suspended"** است → پلن رایگان تمام شده

**گام 2: بررسی Logs Backend**
1. در صفحه Web Service، تب **"Logs"** را باز کنید
2. دنبال خطاها باشید (خطوط قرمز)

**خطاهای رایج و راه حل:**

```
❌ Error: BOT_TOKEN is not defined
```
**راه حل:** متغیر `BOT_TOKEN` را در Environment Variables اضافه کنید.

```
❌ Error: connect ECONNREFUSED
❌ Error: Can't reach database server
```
**راه حل:** دیتابیس در دسترس نیست. به صفحه PostgreSQL بروید و مطمئن شوید Status = **Available** است.

```
❌ Error: relation "User" does not exist
❌ Error: table "Group" does not exist
```
**راه حل:** Migrations اجرا نشده‌اند. به مرحله 8 برگردید و دستی migrations را اجرا کنید.

```
❌ 401 Unauthorized
❌ Error: Invalid bot token
```
**راه حل:** `BOT_TOKEN` غلط است. دوباره از BotFather دریافت کنید.

**گام 3: Redeploy کردن (اگر همه چیز درست است)**
1. در صفحه Web Service، به تب **"Manual Deploy"** بروید
2. روی **"Deploy latest commit"** کلیک کنید
3. منتظر بمانید تا Deploy کامل شود (2-4 دقیقه)

**گام 4: بررسی Webhook تلگرام**
1. مرورگر خود را باز کنید
2. به این آدرس بروید (TOKEN خود را جایگزین کنید):

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
```

مثال:
```
https://api.telegram.org/bot1234567890:ABC.../getWebhookInfo
```

3. خروجی باید شبیه این باشد:

```json
{
  "ok": true,
  "result": {
    "url": "https://firewall-bot-backend.onrender.com/telegram/webhook",
    "has_custom_certificate": false,
    "pending_update_count": 0,
    "last_error_date": 0
  }
}
```

4. چک کنید:
   - ✅ `url` باید URL Backend شما باشد
   - ✅ `pending_update_count` باید 0 باشد
   - ❌ اگر `last_error_date` وجود دارد، یک خطا رخ داده

5. اگر URL غلط بود یا خالی بود، دستی آن را ست کنید:

```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=https://firewall-bot-backend.onrender.com/telegram/webhook
```

---

### ❌ مشکل 2: Mini App باز نمی‌شود

**علائم:**
- روی دکمه Menu یا Management Panel کلیک می‌کنید
- هیچ اتفاقی نمی‌افتد یا صفحه خالی نمایش می‌دهد
- یا خطای "Failed to load" می‌دهد

**راه حل‌های گام به گام:**

**گام 1: بررسی URL در BotFather**
1. به `@BotFather` بروید
2. `/mybots` → ربات خود → Bot Settings → Menu Button
3. چک کنید URL درست است:
```
https://firewall-bot-miniapp.onrender.com
```
4. اگر غلط است، روی **"Edit Menu Button"** کلیک کنید و URL صحیح را ارسال کنید

**گام 2: بررسی MINI_APP_URL در Backend**
1. به صفحه Web Service بروید
2. تب **"Environment"** را باز کنید
3. چک کنید متغیر `MINI_APP_URL` وجود دارد و درست است
4. اگر ندارد، آن را اضافه کنید و Save Changes بزنید

**گام 3: بررسی وضعیت Static Site**
1. به Dashboard Render بروید
2. به صفحه **Static Site** بروید
3. مطمئن شوید وضعیت **"Live"** (سبز) است
4. URL را در مرورگر باز کنید - باید صفحه Mini App را ببینید

**گام 4: Rebuild کردن Static Site**
1. در صفحه Static Site، به تب **"Manual Deploy"** بروید
2. روی **"Clear build cache & deploy"** کلیک کنید
3. منتظر بمانید تا rebuild کامل شود

---

### ❌ مشکل 3: خطای Database Connection

**علائم:**
```
Error: Can't reach database server
Error: Connection timeout
Error: password authentication failed
```

**راه حل‌های گام به گام:**

**گام 1: چک کردن وضعیت Database**
1. به صفحه **PostgreSQL** در Render بروید
2. بالای صفحه، وضعیت را ببینید:
   - ✅ **"Available"** → دیتابیس در حال کار است
   - ⏸️ **"Suspended"** → دیتابیس متوقف شده (پلن رایگان تمام شده)
3. اگر Suspended است:
   - روی **"Resume"** کلیک کنید
   - یا به پلن Paid ارتقا دهید

**گام 2: بررسی Connection String**
1. در صفحه PostgreSQL، تب **"Info"** را باز کنید
2. **External Database URL** را دوباره کپی کنید
3. به صفحه **Web Service** بروید
4. تب **"Environment"** → متغیر `DATABASE_URL` را پیدا کنید
5. روی **"Edit"** کلیک کنید
6. Connection String جدید را paste کنید
7. **"Save Changes"** بزنید

**گام 3: اجرای Migrations دوباره**
1. در صفحه Web Service، تب **"Shell"** را باز کنید
2. روی **"Launch Shell"** کلیک کنید
3. این دستورات را اجرا کنید:

```bash
npm run migrate:deploy
npx prisma generate
```

---

### ❌ مشکل 4: Mini App خطای API می‌دهد

**علائم:**
- Mini App باز می‌شود ولی داده‌ای نمایش نمی‌دهد
- در Console مرورگر (F12) خطای 404 یا 500 می‌بینید
- پیام "Failed to fetch" نمایش می‌دهد

**راه حل‌های گام به گام:**

**گام 1: بررسی VITE_API_BASE_URL**
1. به صفحه **Static Site** بروید
2. تب **"Environment"** را باز کنید
3. چک کنید `VITE_API_BASE_URL` درست است:
```
https://firewall-bot-backend.onrender.com/api/v1
```
4. **توجه:** حتماً `/api/v1` در انتها باشد!
5. اگر تغییر دادید، حتماً **Rebuild** کنید:
   - تب **"Manual Deploy"** → **"Clear build cache & deploy"**

**گام 2: تست Backend API**
در مرورگر به این آدرس بروید:

```
https://firewall-bot-backend.onrender.com/healthz
```

1. اگر پاسخ `{"status":"ok"}` دیدید → ✅ Backend کار می‌کند
2. اگر خطا دیدید یا timeout شد → ❌ Backend مشکل دارد
   - به Logs Backend نگاه کنید
   - Environment Variables را چک کنید

**گام 3: بررسی CORS**
اگر در Console مرورگر خطای CORS دیدید:
```
Access to fetch at '...' from origin '...' has been blocked by CORS policy
```

این به این معنی است که Backend به درستی CORS تنظیم نشده. این معمولاً خودکار حل می‌شود، ولی اگر مشکل ادامه داشت، به کد Backend نگاه کنید.

---

### ❌ مشکل 5: Render Free Plan - سرویس خوابیده (Sleeping)

**علائم:**
- ربات بعد از 15-30 دقیقه بی‌استفاده، پاسخ نمی‌دهد
- اولین پیام بعد از مدتی 30-60 ثانیه طول می‌کشد تا جواب بگیرد
- بعد از اولین پیام، بقیه سریع هستند

**توضیح:**
پلن رایگان Render بعد از **15 دقیقه بی‌استفاده**، سرویس Web Service را **Sleep** می‌کند تا منابع صرفه‌جویی شود. اولین درخواست بعد از Sleep، سرویس را بیدار می‌کند (Cold Start).

**راه حل‌های موقت (رایگان):**

**راه حل 1: استفاده از UptimeRobot (توصیه می‌شود)**

UptimeRobot یک سرویس رایگان است که به صورت دوره‌ای سرویس شما را پینگ می‌کند تا بیدار بماند:

1. به https://uptimerobot.com بروید
2. **"Sign Up for Free"** کلیک کنید و حساب بسازید
3. بعد از ورود، روی **"+ Add New Monitor"** کلیک کنید
4. تنظیمات زیر را وارد کنید:
   - **Monitor Type:** HTTP(s)
   - **Friendly Name:** Firewall Bot Backend
   - **URL:** `https://firewall-bot-backend.onrender.com/healthz`
   - **Monitoring Interval:** 5 minutes (کمترین فاصله رایگان)
5. روی **"Create Monitor"** کلیک کنید

✅ حالا هر 5 دقیقه یک‌بار، UptimeRobot Backend شما را ping می‌کند و بیدار نگه می‌دارد!

**راه حل 2: استفاده از Cron-Job.org**

1. به https://cron-job.org بروید
2. حساب رایگان بسازید
3. یک Cron Job جدید بسازید:
   - URL: `https://firewall-bot-backend.onrender.com/healthz`
   - Interval: Every 5 minutes
4. فعال کنید

**راه حل دائمی (پولی):**

**Upgrade به Starter Plan:**
- **هزینه:** $7/ماه (حدود 210,000 تومان - بسته به نرخ ارز)
- **مزایا:**
  - سرویس همیشه بیدار می‌ماند (No Sleep)
  - منابع بیشتر (0.5 CPU، 512MB RAM)
  - عملکرد بهتر
  - پشتیبانی بهتر

برای Upgrade:
1. در صفحه Web Service، تب **"Settings"** را باز کنید
2. قسمت **"Instance Type"** را پیدا کنید
3. از **Free** به **Starter** تغییر دهید
4. روی **"Save Changes"** کلیک کنید

---

### ❌ مشکل 6: Build Failed (خطای Build)

**علائم:**
```
Build failed with exit code 1
npm ERR! Missing script: "build"
npm ERR! code 127
```

**راه حل‌های گام به گام:**

**برای Web Service (Backend):**

Build Command باید دقیقاً این باشد:
```bash
npm install && npm run migrate:deploy && npx prisma generate
```

اگر غلط است:
1. به صفحه Web Service بروید
2. تب **"Settings"** را باز کنید
3. قسمت **"Build Command"** را پیدا کنید
4. دستور بالا را کپی کنید و paste کنید
5. **"Save Changes"** بزنید

**برای Static Site (Mini App):**

Build Command باید این باشد:
```bash
npm install && npm run build
```

Publish Directory باید این باشد:
```
dist
```

اگر غلط است:
1. به صفحه Static Site بروید
2. تب **"Settings"** را باز کنید
3. هر دو را درست کنید
4. **"Save Changes"** بزنید
5. Manual Deploy → Clear build cache & deploy

---

### ❌ مشکل 7: Environment Variables کار نمی‌کنند

**علائم:**
- متغیرها را اضافه کرده‌اید ولی ربات نمی‌بیندشان
- خطاهای "undefined" یا "is not defined"

**راه حل:**

**برای Backend (Web Service):**
1. متغیرها را در تب **"Environment"** اضافه کنید (نه Settings!)
2. بعد از هر تغییر، **حتماً** روی **"Save Changes"** کلیک کنید
3. Render خودکار redeploy می‌کند - منتظر بمانید تا کامل شود
4. متغیرها **فوراً** در کد در دسترس نیستند - باید redeploy کامل شود

**برای Mini App (Static Site):**
1. متغیرها باید با `VITE_` شروع شوند (مثلاً `VITE_API_BASE_URL`)
2. متغیرها فقط در **Build Time** در دسترس هستند، نه Runtime
3. بعد از تغییر متغیر، **حتماً** Rebuild کنید:
   - تب **"Manual Deploy"** → **"Clear build cache & deploy"**
4. اگر rebuild نکنید، تغییرات اعمال نمی‌شوند!

---

### ❌ مشکل 8: همه چیز Deploy شده ولی کار نمی‌کند

**چک‌لیست جامع عیب‌یابی:**

```
✅ چک کنید: PostgreSQL
   1. Status = Available (سبز)
   2. External Database URL کپی شده
   
✅ چک کنید: Web Service (Backend)
   1. Status = Live (سبز)
   2. همه 8 Environment Variable درست هستند
   3. Build Command درست است
   4. /healthz پاسخ می‌دهد
   5. Logs خطای Critical ندارند
   
✅ چک کنید: Static Site (Mini App)
   1. Status = Live (سبز)
   2. Build Command و Publish Directory درست هستند
   3. VITE_API_BASE_URL درست است
   4. URL در مرورگر باز می‌شود
   
✅ چک کنید: Telegram
   1. BOT_TOKEN درست است
   2. BOT_OWNER_ID درست است
   3. Webhook تنظیم شده (با getWebhookInfo)
   4. Menu Button در BotFather تنظیم شده
   
✅ چک کنید: Database
   1. Migrations اجرا شده‌اند
   2. جداول ایجاد شده‌اند (با Prisma Studio یا psql)
   3. Connection String صحیح است
```

اگر همه ✅ بودند ولی باز کار نمی‌کند:
1. همه سرویس‌ها را Restart کنید
2. Cache مرورگر را پاک کنید (Ctrl+Shift+Del)
3. تلگرام را ببندید و دوباره باز کنید
4. 5-10 دقیقه صبر کنید (گاهی Propagation طول می‌کشد)

---

## 🔍 دستورات مفید برای Debug

### 1. بررسی اطلاعات Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/getWebhookInfo
```

### 2. تنظیم دستی Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/setWebhook?url=<BACKEND_URL>/telegram/webhook
```

### 3. پاک کردن Webhook
در مرورگر:
```
https://api.telegram.org/bot<YOUR_BOT_TOKEN>/deleteWebhook
```

### 4. تست سلامت Backend
در مرورگر:
```
https://firewall-bot-backend.onrender.com/healthz
```

باید پاسخ دهد:
```json
{"status":"ok"}
```

### 5. تست API
در مرورگر:
```
https://firewall-bot-backend.onrender.com/api/v1/health
```

### 6. اتصال به Database از Local (برای کاربران پیشرفته)
```bash
psql "postgresql://user:pass@host/database"
```

---

## 📚 بخش هفتم: مراحل بعدی و بهینه‌سازی

### 🎨 سفارشی‌سازی ربات

حالا که ربات شما کار می‌کند، می‌توانید:

**1. تنظیم قوانین Firewall:**
- از دستور `/panel` استفاده کنید
- قوانین مدیریت لینک، رسانه و زبان را تنظیم کنید
- زمان‌بندی خاص برای قوانین مشخص کنید
- شدت مجازات‌ها را تنظیم کنید

**2. افزودن ربات به گروه‌های واقعی:**
- ربات را به گروه‌های خود اضافه کنید
- حتماً ربات را **Admin** کنید با این دسترسی‌ها:
  - ✅ Delete Messages (پاک کردن پیام‌ها)
  - ✅ Ban Users (مسدود کردن کاربران)
  - ✅ Invite Users (دعوت کاربران)
  - ✅ Pin Messages (سنجاق کردن پیام)

**3. استفاده از پنل Owner:**
- مدیریت Firewall Rules
- مشاهده آمار و گزارش‌ها
- تنظیم Panel Admins
- مدیریت Ban List
- آپلود Promo Slides
- Broadcast پیام به همه گروه‌ها

**4. فعال‌سازی سیستم Stars Payment:**
- از سیستم پرداخت Telegram Stars استفاده کنید
- اشتراک گروه‌ها را مدیریت کنید
- Giveaway برگزار کنید

---

### ⚡ بهینه‌سازی Performance

**1. Upgrade کردن Plans:**

| سرویس | Free Plan | Paid Plan (Starter) |
|-------|-----------|---------------------|
| **PostgreSQL** | 0.1 CPU، 256MB RAM، 1GB Storage | 0.25 CPU، 256MB RAM، 10GB Storage |
| **Web Service** | Auto-sleep بعد از 15 دقیقه، 0.1 CPU، 512MB RAM | همیشه فعال، 0.5 CPU، 512MB RAM |
| **Static Site** | رایگان همیشه، 100GB Bandwidth/ماه | رایگان همیشه، Unlimited |

**هزینه‌ها:**
- PostgreSQL: $7/ماه
- Web Service: $7/ماه
- **مجموع:** $14/ماه (حدود 420,000 تومان)

**ارزش Upgrade:**
- ✅ سرعت بهتر
- ✅ بدون Sleep
- ✅ Backup خودکار (PostgreSQL)
- ✅ پشتیبانی بهتر

**2. استفاده از Custom Domain:**

می‌توانید دامنه شخصی خود را وصل کنید:

**برای Backend:**
1. در صفحه Web Service → تب **"Settings"**
2. قسمت **"Custom Domain"** را پیدا کنید
3. دامنه خود را اضافه کنید (مثلاً `api.yourdomain.com`)
4. DNS records را طبق دستورالعمل تنظیم کنید:
```
CNAME api.yourdomain.com → firewall-bot-backend.onrender.com
```
5. SSL خودکار توسط Render فعال می‌شود

**برای Mini App:**
مشابه Backend (مثلاً `app.yourdomain.com`)

**3. تنظیم Auto-Deploy:**

Render به صورت پیش‌فرض هر بار که به GitHub push می‌کنید، خودکار deploy می‌کند.

برای غیرفعال کردن:
1. Settings → **"Auto-Deploy"** = **No**

برای فعال کردن deploy فقط از branch خاص:
1. Settings → **"Branch"** = `production` (یا هر branch دیگر)

**4. افزودن Health Check:**

Render به صورت خودکار health check انجام می‌دهد. می‌توانید آن را سفارشی کنید:

1. Settings → **"Health Check Path"**
2. مقدار: `/healthz`

---

### 🔐 امنیت و Backup

**1. Backup از Database:**

**روش دستی:**
```bash
# نصب postgresql-client
sudo apt-get install postgresql-client

# Backup گرفتن
pg_dump "postgresql://user:pass@host/db" > backup_$(date +%Y%m%d).sql
```

**روش خودکار (توصیه می‌شود):**
- Render در پلن Paid، backup خودکار **روزانه** دارد
- Backups را از صفحه PostgreSQL → تب **"Backups"** دانلود کنید

**سرویس‌های Third-Party:**
- [SimpleBackups](https://simplebackups.com) - $5/ماه
- [BackupNinja](https://backupninja.com) - رایگان تا 1GB

**2. محافظت از Environment Variables:**

⚠️ **هرگز:**
- ❌ فایل `.env` را در GitHub commit نکنید
- ❌ Secrets را در کد هاردکد نکنید
- ❌ TOKEN ها را در لاگ‌ها چاپ نکنید

✅ **همیشه:**
- ✅ از `.gitignore` استفاده کنید
- ✅ Secrets را فقط در Render Dashboard نگه دارید
- ✅ از `.env.example` برای template استفاده کنید

**3. تنظیم Webhook Secret (امنیت بیشتر):**

برای جلوگیری از درخواست‌های جعلی:

1. یک رشته تصادفی قوی بسازید (32-64 کاراکتر)
2. در Backend Environment Variables اضافه کنید:
```bash
BOT_WEBHOOK_SECRET = your_random_secret_here_abc123XYZ789
```
3. Save Changes و Redeploy

**4. مانیتورینگ:**

**از UptimeRobot برای monitoring استفاده کنید:**
- اگر Backend down شد، به شما ایمیل یا SMS می‌فرستد
- می‌توانید Response Time را track کنید
- رایگان تا 50 monitor

**تنظیم Alert:**
1. در UptimeRobot، روی monitor خود کلیک کنید
2. **"Alert Contacts"** را اضافه کنید (ایمیل، SMS، Telegram)
3. اگر سرویس down شد، فوراً متوجه می‌شوید

---

### 📊 مانیتورینگ و Logs

**1. مشاهده Logs در Render:**

**Backend Logs:**
- صفحه Web Service → تب **"Logs"**
- می‌توانید لاگ‌ها را فیلتر کنید:
  - All Logs
  - Errors Only
  - Build Logs
  - Deploy Logs
- می‌توانید لاگ‌ها را Search کنید

**Database Logs:**
- صفحه PostgreSQL → تب **"Logs"**
- Query های کند را ببینید
- خطاهای Connection را track کنید

**Static Site Logs:**
- صفحه Static Site → تب **"Logs"**
- Build logs و Deploy logs
- خطاهای Build را ببینید

**2. دانلود Logs:**

**روش 1: از Dashboard:**
- در صفحه Logs، روی **"Download"** کلیک کنید

**روش 2: با Render CLI:**
```bash
# نصب Render CLI
npm install -g @render-project/cli

# Login
render login

# دریافت logs
render logs <service-name>
```

**3. Metrics:**

در صفحه Overview هر سرویس، می‌توانید ببینید:
- CPU Usage
- Memory Usage
- Request Count
- Response Time

---

### 🚀 Scale کردن پروژه

وقتی پروژه شما بزرگ‌تر شد و ترافیک بیشتری دارید:

**1. افزایش Resources:**

**برای Web Service:**
1. صفحه Web Service → تب **"Settings"**
2. قسمت **"Instance Type"**
3. می‌توانید انتخاب کنید:
   - Starter: 0.5 CPU، 512MB RAM - $7/ماه
   - Standard: 1 CPU، 2GB RAM - $25/ماه
   - Pro: 2 CPU، 4GB RAM - $85/ماه

**برای PostgreSQL:**
1. صفحه PostgreSQL → تب **"Settings"**
2. قسمت **"Plan"**
3. می‌توانید upgrade کنید برای CPU، RAM و Storage بیشتر

**2. استفاده از Redis برای Cache:**

Render سرویس Redis رایگان دارد:

1. Dashboard → **"New +"** → **"Redis"**
2. نام: `firewall-bot-cache`
3. Plan: **Starter** (رایگان - 25MB)
4. Create کنید

**فواید Redis:**
- Cache کردن Firewall Rules (سرعت بیشتر)
- Session Management
- Rate Limiting
- Real-time Features

**3. جدا کردن Bot از API Server:**

برای Scale بهتر، می‌توانید دو Web Service جداگانه داشته باشید:

**Service 1: Bot Handler**
- فقط Telegram Bot
- پردازش پیام‌ها
- Firewall Engine

**Service 2: API Server**
- فقط API برای Mini App
- RESTful endpoints
- Dashboard data

**4. استفاده از Worker ها:**

برای کارهای سنگین:
- Image Processing
- Report Generation
- Bulk Operations

می‌توانید Background Jobs با **Render Background Worker** اجرا کنید.

---

### 🎓 یادگیری بیشتر

**مستندات رسمی:**
- [Render Documentation](https://render.com/docs) - راهنمای کامل Render
- [Telegram Bot API](https://core.telegram.org/bots/api) - API تلگرام
- [Prisma Documentation](https://www.prisma.io/docs) - ORM دیتابیس
- [React Documentation](https://react.dev) - کتابخانه React
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)

**راهنماهای مفید:**
- [Telegram Mini Apps](https://core.telegram.org/bots/webapps) - راهنمای Mini App
- [PostgreSQL Best Practices](https://wiki.postgresql.org/wiki/Don%27t_Do_This)
- [Render Deploy Guides](https://render.com/docs/deploy-node-express-app)

**جوامع و پشتیبانی:**
- [Render Community](https://community.render.com)
- [Telegram Bot Developers](https://t.me/BotDevelopers)

---

### 💡 نکات و ترفندها

**1. توسعه محلی (Local Development):**

```bash
# نصب Dependencies
npm install

# راه‌اندازی PostgreSQL با Docker
docker-compose up -d postgres

# اجرای Migrations
npm run migrate:dev

# اجرای Bot در حالت Polling (برای Test)
npm run bot

# اجرای Mini App
npm run dev
```

**2. استفاده از Environment Files:**

```bash
# .env.example - Template (در Git)
BOT_TOKEN=your_bot_token_here
BOT_OWNER_ID=your_telegram_id
DATABASE_URL=postgresql://...

# .env - فایل واقعی (در .gitignore)
BOT_TOKEN=1234567890:ABC...
BOT_OWNER_ID=123456789
DATABASE_URL=postgresql://real_connection_string
```

**3. تست قبل از Deploy:**

همیشه در محیط local تست کنید:

```bash
# Build کردن Mini App
npm run build

# اگر بدون خطا build شد، آماده deploy است ✅
```

**4. Git Workflow:**

```bash
# Branch جدید برای feature
git checkout -b feature/new-feature

# تغییرات را commit کنید
git add .
git commit -m "feat: add new feature"

# Push به GitHub
git push origin feature/new-feature

# بعد از تست، merge به main
git checkout main
git merge feature/new-feature
git push origin main
```

**5. Script های مفید:**

**Script 1: Backup سریع Database:**
```bash
#!/bin/bash
# backup-db.sh
pg_dump "$DATABASE_URL" > "backup_$(date +%Y%m%d_%H%M%S).sql"
echo "✅ Backup created successfully!"
```

**Script 2: Health Check:**
```bash
#!/bin/bash
# health-check.sh
echo "🔍 Checking Backend..."
curl -f https://your-backend.onrender.com/healthz || echo "❌ Backend is down!"

echo "🔍 Checking Mini App..."
curl -f https://your-miniapp.onrender.com || echo "❌ Mini App is down!"
```

---

## 🏆 بهترین روش‌ها (Best Practices)

### ✅ چیزهایی که باید انجام دهید:

1. **Environment Variables را به درستی مدیریت کنید**
   - همه Secrets در Render Dashboard
   - هرگز در کد هاردکد نکنید

2. **از Git Branches استفاده کنید**
   - `main` برای production
   - `develop` برای development
   - Feature branches برای ویژگی‌های جدید

3. **قبل از Deploy تست کنید**
   - در محیط local تست کنید
   - Build را چک کنید
   - Logs را ببینید

4. **Backup منظم بگیرید**
   - روزانه از database
   - قبل از تغییرات بزرگ

5. **Logs را مرتباً بررسی کنید**
   - هر چند روز یک‌بار
   - بعد از Deploy
   - وقتی مشکلی گزارش می‌شود

6. **مستندات بنویسید**
   - تغییراتی که انجام دادید
   - Environment Variables جدید
   - نکات مهم

### ❌ چیزهایی که نباید انجام دهید:

1. **Secrets را در کد commit نکنید**
   - ❌ هرگز `.env` را push نکنید
   - ❌ TOKEN ها را در کد ننویسید

2. **مستقیماً روی branch اصلی تغییر ندهید**
   - ❌ مستقیم روی `main` commit نکنید
   - ✅ از feature branches استفاده کنید

3. **بدون تست deploy نکنید**
   - ❌ تغییرات را بدون تست push نکنید
   - ✅ همیشه local test کنید

4. **Database را بدون backup تغییر ندهید**
   - ❌ Migration های خطرناک بدون backup
   - ✅ قبل از هر تغییر backup بگیرید

5. **از Logging بی‌رویه استفاده نکنید**
   - ❌ هر چیزی را log نکنید
   - ❌ Sensitive data را log نکنید

---

## 📸 راهنمای تصویری مراحل

### تصویر 1: صفحه اصلی Render.com
```
┌───────────────────────────────────────────────────┐
│  RENDER                                            │
│  ┌─────────────────────────────────────────────┐  │
│  │  Cloud Application Hosting                  │  │
│  │  for Developers                             │  │
│  │                                              │  │
│  │  [Get Started Free] [Sign In]               │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Sign up with:                                     │
│  [GitHub] [GitLab] [Google] [Email]               │
└───────────────────────────────────────────────────┘
```

### تصویر 2: Dashboard بعد از ورود
```
┌───────────────────────────────────────────────────┐
│  Dashboard                              [New +]    │
│  ┌─────────────────────────────────────────────┐  │
│  │  You don't have any services yet            │  │
│  │                                              │  │
│  │  Get started by creating your first service │  │
│  │  [Create Web Service]                       │  │
│  │  [Create Static Site]                       │  │
│  │  [Create PostgreSQL]                        │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 3: منوی New +
```
┌─────────────────────────┐
│  New +                   │
│  ┌───────────────────┐  │
│  │  Web Service       │  │
│  │  Static Site       │  │
│  │  PostgreSQL        │  ◀── برای Database
│  │  Redis             │  │
│  │  Cron Job          │  │
│  │  Background Worker │  │
│  └───────────────────┘  │
└─────────────────────────┘
```

### تصویر 4: فرم ساخت PostgreSQL
```
┌───────────────────────────────────────────────────┐
│  Create PostgreSQL Database                        │
│  ┌─────────────────────────────────────────────┐  │
│  │ Name: [firewall-bot-db____________]         │  │
│  │ Database: [firewall_bot____________]        │  │
│  │ Region: [Frankfurt (EU Central) ▼]         │  │
│  │ PostgreSQL Version: [16 ▼]                 │  │
│  │ Plan: [Free ▼]                              │  │
│  │                                              │  │
│  │ [Create Database]                           │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 5: Connection String
```
┌───────────────────────────────────────────────────┐
│  firewall-bot-db       ● Available                 │
│  ┌─────────────────────────────────────────────┐  │
│  │ Connections                                  │  │
│  │                                              │  │
│  │ External Database URL:                      │  │
│  │ postgresql://firewall_user:abc123XYZ...    │  │
│  │ @dpg-xxxx.frankfurt-postgres.render.com    │  │
│  │ /firewall_bot                               │  │
│  │ [📋 Copy]  ◀── این را کپی کنید            │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 6: فرم Web Service
```
┌───────────────────────────────────────────────────┐
│  Create Web Service                                │
│  ┌─────────────────────────────────────────────┐  │
│  │ Name: [firewall-bot-backend________]        │  │
│  │ Region: [Frankfurt (EU Central) ▼]         │  │
│  │ Branch: [main ▼]                            │  │
│  │ Runtime: [Node ▼]                           │  │
│  │                                              │  │
│  │ Build Command:                              │  │
│  │ npm install && npm run migrate:deploy      │  │
│  │ && npx prisma generate                     │  │
│  │                                              │  │
│  │ Start Command:                              │  │
│  │ npm run bot:webhook                         │  │
│  │                                              │  │
│  │ [▼ Advanced]                                │  │
│  │   Environment Variables: ...                │  │
│  │                                              │  │
│  │ [Create Web Service]                        │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 7: Environment Variables
```
┌───────────────────────────────────────────────────┐
│  Environment Variables                             │
│  ┌─────────────────────────────────────────────┐  │
│  │ BOT_TOKEN                                    │  │
│  │ 1234567890:ABCdefGHI...                     │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ BOT_OWNER_ID                                │  │
│  │ 123456789                                   │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ DATABASE_URL                                │  │
│  │ postgresql://...                            │  │
│  │ [Edit] [Delete]                             │  │
│  ├─────────────────────────────────────────────┤  │
│  │ [+ Add Environment Variable]                │  │
│  └─────────────────────────────────────────────┘  │
│  [Save Changes]                                   │
└───────────────────────────────────────────────────┘
```

### تصویر 8: Deploy Logs
```
┌───────────────────────────────────────────────────┐
│  firewall-bot-backend       ● Live                 │
│  Logs                                              │
│  ┌─────────────────────────────────────────────┐  │
│  │ 2025-01-20 10:30:15  Starting build...      │  │
│  │ 2025-01-20 10:30:16  ✓ Cloning repository   │  │
│  │ 2025-01-20 10:30:45  ✓ npm install complete │  │
│  │ 2025-01-20 10:31:20  ✓ Running migrations   │  │
│  │ 2025-01-20 10:31:35  ✓ Prisma generated     │  │
│  │ 2025-01-20 10:31:50  ✓ Build succeeded      │  │
│  │ 2025-01-20 10:32:00  Starting server...     │  │
│  │ 2025-01-20 10:32:05  ✓ Server listening     │  │
│  │ 2025-01-20 10:32:10  ✓ Webhook registered   │  │
│  │ 2025-01-20 10:32:15  ✓ Bot is running       │  │
│  └─────────────────────────────────────────────┘  │
│                                                    │
│  Your service is live at:                         │
│  https://firewall-bot-backend.onrender.com        │
└───────────────────────────────────────────────────┘
```

### تصویر 9: ربات در تلگرام
```
┌───────────────────────────────────────────────────┐
│  @MyFirewallBot                                    │
│  ┌─────────────────────────────────────────────┐  │
│  │ 🤖 به ربات فایروال خوش آمدید!              │  │
│  │                                              │  │
│  │ این ربات برای مدیریت و محافظت از گروه‌های │  │
│  │ شما طراحی شده است.                          │  │
│  │                                              │  │
│  │ [➕ افزودن به گروه]                         │  │
│  │ [📱 پنل مدیریت]                             │  │
│  │ [📢 کانال ما]                               │  │
│  │ [ℹ️ دستورات]                                │  │
│  │                                              │  │
│  │ ────────────────────────────────────        │  │
│  │ پیام خود را بنویسید...      [☰ Menu]      │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

### تصویر 10: Mini App Dashboard
```
┌───────────────────────────────────────────────────┐
│  🔥 ربات فایروال                                  │
│  ┌─────────────────────────────────────────────┐  │
│  │ 👤 نام شما                                  │  │
│  │ 0 XP • اکانت رایگان                        │  │
│  │                                              │  │
│  │ ┌──────────────┐  ┌──────────────┐         │  │
│  │ │ گروه‌های فعال│  │ کل اعضا      │         │  │
│  │ │      3       │  │    1,245     │         │  │
│  │ └──────────────┘  └──────────────┘         │  │
│  │                                              │  │
│  │ 📱 گروه‌های من:                            │  │
│  │ ┌─────────────────────────────────────────┐ │  │
│  │ │ 💬 گروه تست              [فعال ✓]     │ │  │
│  │ │ 👥 125 عضو • 23 روز باقی‌مانده         │ │  │
│  │ │ [📊 آمار] [⚙️ تنظیمات]                  │ │  │
│  │ └─────────────────────────────────────────┘ │  │
│  │ [+ افزودن گروه جدید]                       │  │
│  └─────────────────────────────────────────────┘  │
└───────────────────────────────────────────────────┘
```

---

## 🎯 خلاصه کامل مراحل

| # | مرحله | زمان | وضعیت |
|---|--------|------|-------|
| 1️⃣ | دریافت BOT_TOKEN از BotFather | 2 دقیقه | ✅ |
| 2️⃣ | پیدا کردن User ID | 1 دقیقه | ✅ |
| 3️⃣ | انتخاب Username ربات | - | ✅ |
| 4️⃣ | ذخیره کد در GitHub | 3 دقیقه | ✅ |
| 5️⃣ | ساخت حساب Render.com | 3 دقیقه | ✅ |
| 6️⃣ | راه‌اندازی PostgreSQL | 5 دقیقه | ✅ |
| 7️⃣ | Deploy Backend (Web Service) | 7 دقیقه | ✅ |
| 8️⃣ | بررسی Migrations | 2 دقیقه | ✅ |
| 9️⃣ | تست اولیه ربات | 2 دقیقه | ✅ |
| 🔟 | Deploy Mini App (Static Site) | 6 دقیقه | ✅ |
| 1️⃣1️⃣ | اتصال Mini App به Backend | 2 دقیقه | ✅ |
| 1️⃣2️⃣ | تنظیم Menu Button | 2 دقیقه | ✅ |
| 1️⃣3️⃣ | تست نهایی کامل | 5 دقیقه | ✅ |

**⏱️ مجموع زمان:** 40-50 دقیقه

---

## ✅ چک‌لیست نهایی قبل از پایان

قبل از اینکه بگویید "تمام شد"، این موارد را **یک به یک** چک کنید:

### Backend (Web Service)
- [ ] Status = **Live** (سبز رنگ)
- [ ] Build موفق بوده (بدون خطا)
- [ ] همه 8 Environment Variable درست تنظیم شده:
  - [ ] BOT_TOKEN
  - [ ] BOT_OWNER_ID
  - [ ] BOT_USERNAME
  - [ ] DATABASE_URL
  - [ ] BOT_START_MODE = webhook
  - [ ] PORT = 3000
  - [ ] WEBHOOK_DOMAIN
  - [ ] MINI_APP_URL
- [ ] Logs بدون خطای Critical
- [ ] دستور `/healthz` پاسخ `{"status":"ok"}` می‌دهد

### Database (PostgreSQL)
- [ ] Status = **Available**
- [ ] External Connection String کپی شده
- [ ] Migrations اجرا شده‌اند
- [ ] جداول ایجاد شده‌اند (User، Group، FirewallRule، etc.)

### Mini App (Static Site)
- [ ] Status = **Live** (سبز رنگ)
- [ ] Build موفق بوده
- [ ] `VITE_API_BASE_URL` درست تنظیم شده
- [ ] URL در مرورگر باز می‌شود و صفحه نمایش داده می‌شود
- [ ] داده‌ها از API دریافت می‌شوند (بدون خطای 404)

### Telegram Bot
- [ ] Token از BotFather دریافت شده
- [ ] Owner ID صحیح است (از @userinfobot)
- [ ] ربات به پیام `/start` پاسخ می‌دهد
- [ ] دستور `/panel` کار می‌کند و پنل مدیریت باز می‌شود
- [ ] Menu Button در BotFather تنظیم شده

### Mini App Integration
- [ ] Menu Button URL در BotFather درست است
- [ ] `MINI_APP_URL` در Backend Environment Variables ست شده
- [ ] Mini App از داخل تلگرام (Menu Button) باز می‌شود
- [ ] API calls از Mini App به Backend موفق هستند
- [ ] داده‌ها در Dashboard نمایش داده می‌شوند

### Firewall و عملکرد کلی
- [ ] ربات در چت خصوصی پاسخ می‌دهد
- [ ] ربات در گروه تست فعال است و پیام می‌گیرد
- [ ] Firewall rules (اگر فعال است) کار می‌کنند
- [ ] Dashboard Mini App داده‌های گروه را نمایش می‌دهد
- [ ] Owner Panel تمام ویژگی‌ها را دارد

### امنیت و Monitoring (اختیاری ولی توصیه می‌شود)
- [ ] UptimeRobot یا سرویس مشابه تنظیم شده (برای جلوگیری از Sleep)
- [ ] Backup اولیه از Database گرفته شده
- [ ] `.env` در `.gitignore` است (Secrets در GitHub نیست)

---

## 📞 کمک و پشتیبانی

اگر در هر مرحله‌ای به مشکل برخوردید:

### 1. ابتدا خودتان بررسی کنید:
- **Logs را ببینید:** اکثر مشکلات در Logs مشخص هستند
- **Environment Variables را چک کنید:** 90% خطاها به خاطر متغیرهای غلط است
- **به بخش عیب‌یابی این راهنما مراجعه کنید:** احتمالاً مشکل شما آنجا توضیح داده شده

### 2. منابع کمک:
- **مستندات Render:** https://render.com/docs
- **Render Community:** https://community.render.com
- **مستندات Telegram Bot API:** https://core.telegram.org/bots/api
- **Stack Overflow:** جستجوی خطای خود

### 3. اطلاعات مورد نیاز برای دریافت کمک:
وقتی از کسی کمک می‌خواهید، این اطلاعات را آماده داشته باشید:
- نسخه Node.js: `node --version`
- متن کامل خطا از Logs
- مرحله‌ای که مشکل دارید
- چه کارهایی انجام داده‌اید

### 4. Checklist قبل از درخواست کمک:
- [ ] Logs Backend را بررسی کردم
- [ ] همه Environment Variables را چک کردم
- [ ] سرویس‌ها را Restart کردم
- [ ] به بخش عیب‌یابی این راهنما مراجعه کردم
- [ ] Google جستجو کردم
- [ ] 10-15 دقیقه صبر کردم (گاهی تغییرات زمان می‌برد)

---

## 📝 یادداشت‌های نهایی

### نکات مهم:
1. **صبور باشید:** Deploy اولین بار ممکن است 5-10 دقیقه طول بکشد
2. **دقیق باشید:** یک حرف اشتباه در Environment Variable می‌تواند همه چیز را خراب کند
3. **Backup بگیرید:** قبل از تغییرات بزرگ، حتماً backup دیتابیس بگیرید
4. **لاگ‌ها را بخوانید:** لاگ‌ها بهترین دوست شما هستند!
5. **تست کنید:** قبل از استفاده در گروه‌های واقعی، در گروه تست امتحان کنید

### محدودیت‌های Free Plan:
- **Web Service:** بعد از 15 دقیقه بی‌استفاده، Sleep می‌شود
- **PostgreSQL:** 90 روز رایگان، بعد $7/ماه
- **Bandwidth:** 100GB/ماه برای Static Site
- **Build Time:** 500 دقیقه/ماه برای تمام سرویس‌ها

### بعد از Deploy چه کار کنیم؟
1. **مانیتور کنید:** چند روز اول بیشتر لاگ‌ها را چک کنید
2. **تست کنید:** تمام ویژگی‌ها را در شرایط واقعی امتحان کنید
3. **بهینه کنید:** عملکرد را بررسی کنید و در صورت نیاز بهینه‌سازی کنید
4. **Backup بگیرید:** یک backup اولیه از database بگیرید
5. **سفارشی کنید:** ربات را طبق نیاز خود تنظیم کنید

---

## 🎊 تبریک! ربات شما کاملاً آماده است! 🎊

شما با موفقیت:
- ✅ یک ربات تلگرام قدرتمند با قابلیت Firewall ساختید
- ✅ یک Mini App زیبا با React deploy کردید
- ✅ یک دیتابیس PostgreSQL راه‌اندازی کردید
- ✅ همه چیز را روی Render.com به صورت حرفه‌ای deploy کردید

**حالا وقت آن است که:**
- 🎯 ربات را به گروه‌های خود اضافه کنید
- 🔥 Firewall Rules را تنظیم کنید
- 📊 از Dashboard برای مدیریت استفاده کنید
- 🚀 از قابلیت‌های پیشرفته لذت ببرید!

---

**💚 موفق و پیروز باشید! 💚**

**ساخته شده با ❤️ برای جامعه توسعه‌دهندگان ایرانی**

---

**📅 تاریخ بروزرسانی:** ژانویه 2025  
**🔢 نسخه راهنما:** 2.0  
**✍️ نویسنده:** تیم Emergent AI

---

## 📖 پیوست: مراجع سریع

### URLهای مهم:
- Render Dashboard: https://dashboard.render.com
- GitHub: https://github.com
- BotFather: https://t.me/BotFather
- UserInfoBot: https://t.me/userinfobot
- UptimeRobot: https://uptimerobot.com

### دستورات مفید:
```bash
# نصب Dependencies
npm install

# اجرای Migrations
npm run migrate:deploy

# Build کردن Mini App
npm run build

# اجرای Bot (Polling - برای Local)
npm run bot

# اجرای Bot (Webhook - برای Production)
npm run bot:webhook

# اجرای Mini App (Dev Mode)
npm run dev

# Deploy Worker به Cloudflare (اختیاری)
npm run worker:deploy
```

### Environment Variables کامل:
```bash
# ضروری
BOT_TOKEN=1234567890:ABCdefGHI...
BOT_OWNER_ID=123456789
BOT_USERNAME=MyFirewallBot
DATABASE_URL=postgresql://...
BOT_START_MODE=webhook
PORT=3000
WEBHOOK_DOMAIN=https://firewall-bot-backend.onrender.com
MINI_APP_URL=https://firewall-bot-miniapp.onrender.com

# اختیاری
NODE_ENV=production
BOT_WEBHOOK_SECRET=your_random_secret
HOST=0.0.0.0
WEBHOOK_PATH=/telegram/webhook
```

### Commands ربات:
```
/start - شروع ربات
/panel - پنل مدیریت Owner
/help - راهنما
/stats - آمار (در گروه)
```

---

**🙏 از صبر و دقت شما متشکریم!**

اگر این راهنما برای شما مفید بود، لطفاً آن را با دیگران به اشتراک بگذارید! 😊