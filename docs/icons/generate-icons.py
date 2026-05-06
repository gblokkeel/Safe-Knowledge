#!/usr/bin/env python3
"""
Generate all required PWA icons for SAFe Knowledge Base.
Requires: pip install Pillow

Run from the icons/ directory:
  cd website/icons
  python3 generate-icons.py

This creates PNG files at all required sizes for iOS, Android, and PWA.
"""

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    print("❌ Pillow not installed. Run: pip install Pillow")
    exit(1)

import os

SIZES = [72, 96, 128, 144, 152, 180, 192, 512]

def create_icon(size):
    """Create a SAFe KB icon at the given pixel size."""
    img = Image.new('RGBA', (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)

    # Background gradient simulation (solid colors)
    # Rounded rectangle background
    margin = size // 10
    bg_color = (30, 42, 58)       # Dark navy
    accent   = (59, 130, 246)     # Blue

    # Draw rounded rectangle background
    draw.rounded_rectangle(
        [0, 0, size - 1, size - 1],
        radius=size // 5,
        fill=bg_color
    )

    # Draw a subtle blue accent bar at the top
    bar_height = size // 8
    draw.rounded_rectangle(
        [0, 0, size - 1, bar_height * 2],
        radius=size // 5,
        fill=accent
    )
    draw.rectangle([0, bar_height, size - 1, bar_height * 2], fill=accent)

    # Draw "S" letter
    letter_size = int(size * 0.55)
    try:
        # Try system font
        from PIL import ImageFont
        font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", letter_size)
    except Exception:
        try:
            font = ImageFont.truetype("/usr/share/fonts/truetype/liberation/LiberationSans-Bold.ttf", letter_size)
        except Exception:
            font = ImageFont.load_default()

    text = "S"
    # Center the text
    bbox = draw.textbbox((0, 0), text, font=font)
    text_w = bbox[2] - bbox[0]
    text_h = bbox[3] - bbox[1]
    x = (size - text_w) // 2 - bbox[0]
    y = (size - text_h) // 2 - bbox[1] + size // 20

    # Shadow
    draw.text((x + size//30, y + size//30), text, fill=(0, 0, 0, 100), font=font)
    # Main letter
    draw.text((x, y), text, fill=(255, 255, 255), font=font)

    return img

for size in SIZES:
    icon = create_icon(size)
    filename = f"icon-{size}.png"
    icon.save(filename, "PNG", optimize=True)
    print(f"✅ Created {filename} ({size}x{size})")

# Also create apple-touch-icon (180px, no transparency)
icon_180 = create_icon(180)
icon_180.save("apple-touch-icon.png", "PNG")
print("✅ Created apple-touch-icon.png (180x180)")

print("\n🎉 All icons generated successfully!")
print("   Add them to your website/icons/ directory.")
