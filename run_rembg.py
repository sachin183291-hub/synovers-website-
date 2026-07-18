# pyrefly: ignore [missing-import]
from rembg import remove

input_path = "C:\\Users\\sachi\\.gemini\\antigravity-ide\\brain\\14ca51c9-6414-4164-beb4-2e832cb60c88\\synovers_hero_realistic_duo_1784096387780.png"
output_path = "C:\\Users\\sachi\\Desktop\\New folder (2)\\public\\synovers-hero-transparent.png"

with open(input_path, 'rb') as i:
    input_data = i.read()
    output_data = remove(input_data)
    with open(output_path, 'wb') as o:
        o.write(output_data)
