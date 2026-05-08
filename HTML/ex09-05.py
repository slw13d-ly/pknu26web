class Arrays:
    def __new__(cls):
        print("new 연산자")
        return super().__new__(cls)
    
    def __init_(self):
        print("초기화 됨")

a = Arrays()
print(a)