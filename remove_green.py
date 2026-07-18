from PIL import Image

def remove_green(input_path, output_path):
    img = Image.open(input_path).convert("RGBA")
    datas = img.getdata()

    newData = []
    for item in datas:
        # Check if the pixel is mostly green (R < 100, G > 200, B < 100)
        # since we asked for pure #00FF00 green.
        if item[0] < 50 and item[1] > 200 and item[2] < 50:
            # Change to transparent
            newData.append((255, 255, 255, 0))
        else:
            newData.append(item)

    img.putdata(newData)
    img.save(output_path, "PNG")

remove_green(
    "C:\\Users\\sachi\\.gemini\\antigravity-ide\\brain\\14ca51c9-6414-4164-beb4-2e832cb60c88\\synovers_hero_greenbg_1784097385566.png",
    "C:\\Users\\sachi\\Desktop\\New folder (2)\\public\\synovers-hero.png"
)
