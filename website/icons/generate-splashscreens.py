#!/usr/bin/env python3
"""
Generate iOS splash screens for PWA.
Requires: pip install Pillow

Run from the icons/ directory:
  python3 generate-splashscreens.py
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("❌ Pillow not installed. Run: pip install Pillow")
    exit(1)

# (width, height, filename)
SPLASH_SIZES = [
    (750,  1334,  "splash-750x1334.png"),     # iPhone SE
    (1170, 2532,  "splash-1170x2532.png"),    # iPhone 14
    (1290, 2796,  "splash-1290x2796.png"),    # iPhone 15 Pro Max
    (1640, 2360,  "splash-1640x2360.png"),    # iPad Air / Pro 11"
    (2048, 2732,  "splash-2048x2732.png"),    # iPad Pro 12.9"
    (2732, 2048,  "splash-2732x2048.png"),    # iPad Pro 12.9" landscape
]

def create_splash(width, height, filename):
    img = Image.new('RGB', (width, height), (30, 42, 58))  # Dark navy
    draw = ImageDraw.Draw(img)

    # Subtle gradient effect with a lighter stripe
    for y in range(height):
        t = y / height
        r = int(30 + t * 5)
        g = int(42 + t * 5)
        b = int(58 + t * 10)
        draw.line([(0, y), (width, y)], fill=(r, g, b))

    # Center logo icon
    icon_size = min(width, height) // 5
    cx, cy = width // 2, height // 2 - icon_size // 4

    # Draw rounded square background
    margin = icon_size // 8
    icon_x0 = cx - icon_size // 2
    icon_y0 = cy - icon_size // 2
    icon_x1 = cx + icon_size // 2
    icon_y1 = cy + icon_size // 2
    radius = icon_size // 4

    draw.rounded_rectangle([icon_x0, icon_y0, icon_x1, icon_y1],
                            radius=radius, fill=(59, 130, 246))

    # Blue accent bar at top of icon
    bar_h = icon_size // 6
    draw.rounded_rectangle([icon_x0, icon_y0, icon_x1, icon_y0 + bar_h * 2],
                            radius=radius, fill=(96, 165, 250))
    draw.rectangle([icon_x0, icon_y0 + bar_h, icon_x1, icon_y0 + bar_h * 2],
                   fill=(96, 165, 250))

    # Draw "S" text in icon
    letter_size = int(icon_size * 0.55)
    try:
        font_letter = ImageFont.truetype(
            "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", letter_size)
    except Exception:
        font_letter = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), "S", font=font_letter)
    tx = cx - (bbox[2] - bbox[0]) // 2 - bbox[0]
    ty = cy - (bbox[3] - bbox[1]) // 2 - bbox[1] + icon_size // 16
    draw.text((tx + 3, ty + 3), "S", fill=(0, 0, 0, 60), font=font_letter)
    draw.text((tx, ty), "S", fill=(255, 255, 255), font=font_letter)

    # App name below icon
    name_size = max(24, icon_size // 4)
    try:
        font_name = ImageFont.truetype(
            "/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", name_size)
        font_sub = ImageFont.truetype(
            "/usr/share/fonts/truetype/liberation/LiberationSans-Regular.ttf",
            int(name_size * 0.65))
    except Exception:
        font_name = ImageFont.load_default()
        font_sub = font_name

    name_text = "SAFe Knowledge Base"
    bbox_n = draw.textbbox((0, 0), name_text, font=font_name)
    nx = (width - (bbox_n[2] - bbox_n[0])) // 2 - bbox_n[0]
    ny = icon_y1 + icon_size // 4
    draw.text((nx, ny), name_text, fill=(255, 255, 255), font=font_name)

    sub_text = "Scaled Agile Framework"
    bbox_s = draw.textbbox((0, 0), sub_text, font=font_sub)
    sx = (width - (bbox_s[2] - bbox_s[0])) // 2 - bbox_s[0]
    sy = ny + (bbox_n[3] - bbox_n[1]) + int(name_size * 0.3)
    draw.text((sx, sy), sub_text, fill=(148, 163, 184), font=font_sub)

    img.save(filename, "PNG", optimize=True)
    print(f"✅ {filename}  ({width}×{height})")

for w, h, fname in SPLASH_SIZES:
    create_splash(w, h, fname)

print("\n🎉 All splash screens generated!")
