# fis247FE

Website giới thiệu **FIS247** — dịch vụ hạ tầng CNTT, thiết bị chuyên dụng ngân hàng và robot dịch vụ.

## Công nghệ

| | |
|---|---|
| Framework | Next.js 16 (App Router, Turbopack) |
| Ngôn ngữ | TypeScript |
| Giao diện | Tailwind CSS v4 |
| Hiệu ứng | Framer Motion |
| Font | Be Vietnam Pro |

## Chạy dự án

```bash
npm install
npm run dev
```

Mở http://localhost:3000

| Lệnh | Tác dụng |
|---|---|
| `npm run dev` | Chạy môi trường phát triển, có hot reload |
| `npm run build` | Build bản production |
| `npm start` | Chạy bản đã build (phải `build` trước) |
| `npm run lint` | Kiểm tra ESLint |

## Cấu trúc

```
src/
├── app/
│   ├── layout.tsx        Font, metadata
│   ├── page.tsx          Ghép các section của trang chủ
│   └── globals.css       Token màu, keyframes, tiện ích dùng chung
└── components/
    ├── Header.tsx        Menu cố định, hiệu ứng gạch chân cam
    ├── Hero.tsx          Banner 4 slide tự chuyển
    ├── PhotoMosaic.tsx   Dải ảnh nghiêng chạy ngược chiều
    ├── Capabilities.tsx  Dịch vụ & Sản phẩm (dạng tab)
    ├── Alliances.tsx     Dải logo đối tác trượt ngang
    ├── IntroStats.tsx    Giới thiệu công ty + số liệu
    ├── SuccessStories.tsx
    ├── Testimonials.tsx
    ├── ContactCTA.tsx    Form liên hệ
    ├── Footer.tsx
    ├── PhotoTile.tsx     Ô ảnh dùng lại, có ảnh giữ chỗ
    └── Reveal.tsx        Hiệu ứng hiện khi cuộn + đếm số
```

## Tài nguyên

- `public/images/` — ảnh banner, ảnh section, logo
- `public/images/partners/` — logo đối tác (đã tách nền, tối ưu WebP)
- `public/files/FIS247-Brochure.pdf` — hồ sơ năng lực cho nút tải về

Thay brochure: ghi đè file trong `public/files/` và **giữ nguyên tên**, không cần sửa code.

## Form liên hệ

Form ở section Liên hệ gửi dữ liệu qua biến môi trường `NEXT_PUBLIC_SHEET_ENDPOINT`.
Tạo file `.env.local`:

```
NEXT_PUBLIC_SHEET_ENDPOINT=<URL Google Apps Script>
```

Khi chưa cấu hình, form ghi dữ liệu ra console để kiểm tra thay vì gửi đi.

## Lưu ý

`next.config.ts` khai báo `images.qualities: [75, 85]`. Next.js 16 mặc định chỉ cho phép `[75]`,
nếu bỏ khai báo này thì ảnh banner dùng `quality={85}` sẽ bị hạ ngầm xuống 75.
