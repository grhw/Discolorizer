from math import ceil, sqrt


foreground = range(30,40)
background = range(40,50)
formatting = [0,2,3]

lines = []

for fore in foreground:
    for back in background:
        for form in formatting:
            lines.append(f"[{form};{fore};{back}mh")


square = ceil(sqrt(len(lines)))//2
final = []
line = []

print(square, lines)

for i,v in enumerate(lines):
    if i%square == 0:
        final.append("".join(line))
        line = []
    
    line.append(v)

with open("out.txt","w+") as f:
    f.write("\n".join(final))