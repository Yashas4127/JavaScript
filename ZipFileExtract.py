import os
import zipfile

folder_path = r"" #Add your path here 

def extract_all_zips(directory):
    extracted_any = False

    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith(".zip"):
                zip_path = os.path.join(root, file)
                extract_folder = os.path.join(root, os.path.splitext(file)[0])

                if not os.path.exists(extract_folder):
                    os.makedirs(extract_folder, exist_ok=True)

                try:
                    with zipfile.ZipFile(zip_path, 'r') as zip_ref:
                        zip_ref.extractall(extract_folder)
                        print(f"✅ Extracted: {zip_path} → {extract_folder}")
                        extracted_any = True
                except zipfile.BadZipFile:
                    print(f"❌ Bad ZIP: {zip_path}")

                # Optional: Delete original ZIP after extraction
                # os.remove(zip_path)

    return extracted_any


# Loop until there are no more ZIPs found
while extract_all_zips(folder_path):
    pass

print("🎉 All ZIP files including nested ones have been extracted!")
