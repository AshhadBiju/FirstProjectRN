import time
import os 
import glob

C:/Users/lenovo/Documents/Rockstar Games/Red Dead Redemption 2 = r"A:\Settings"
SLEEP_TIME = 600

def delete_sga_files():
    pattern = 
    os.path.join(C:C:/Users/lenovo/Documents/Rockstar Games/Red Dead Redemption 2, "sga_*")
    for sga_file in glob.glob(pattern):
        os.remove(sga_file)
    if __name__=="__main__":
        while True:
            delete_sga_files()
            time.sleep(SLEEP_TIME)