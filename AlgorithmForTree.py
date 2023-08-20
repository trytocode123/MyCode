G =[]
P = []
const = 10
def CreateQ(Open):
    for i in range(const):
        Open.append([])
        for j in range(2):
            Open[i].append(0)
def EmptyQ(Open):
    return len(Open) * Open.count(Open[0]) == 0
def AddQ(Open, n, value, index):
    n = n + 1
    Open[n][0] = value
    Open[n][1] = index
    i = n
    while i > n:
        j = int(i / 2)
        if (Open[i][0]) < Open[j][0]:
            temp = Open[i]
            Open[i] = Open[j]
            Open[j] = temp
        i = j
    return n
def RemoveQ(Open):
    value = Open[1][0]
    index = Open[1][1]
    n = len(Open) - Open.count(Open[0])
    Open[1][0] = Open[n][0]
    Open[1][1] = Open[n][1]
    Open[n][0] = 0
    Open[n][1] = 0
    n = n - 1
    i = 1

    while i<= int(n / 2):
        j = i * 2
        if j < n:
            if Open[j][0] > Open[j  + 1][0]:
                j = j + 1
                if(Open[i][0] > Open[j][0]):
                    Open[i],Open[j]=Open[j],Open[i]
        i=i+1
    return value,index,n

def Split(string):
    k=string.index(' ')
    str=string[0:k]
    i=int(str,base=10)
    m=string.index(' ',k+1,-1)
    str=string[k+1:m]
    j=int(str,base=10)
    str=string[m+1:len(string)]
    w=int(str,base=10)
    return i,j,w

def Init(path,G):
    f=open(path)
    string=f.readline()
    string=string.replace('\t',' ')
    n,a,z=Split(string)
    for i in range(n+1):
        G.append([])
        for j in range(n+1):
            G[i].append(0)
    while True:
        string = f.readline()
        if not string:
            break
        string=string.replace('\t',' ')
        i,j,x=Split(string)
        G[i][j]=G[j][i]=int(x)
    f.close()
    return int(n),int(a),int(x)

                         
            
      
    
