List<object> box = new List<object>();

box.Add(7);
box.Add(28);
box.Add(-1);
box.Add(true);
box.Add("Chair");

int sum = 0;

for (int i = 0; i < box.Count; i++) {
    Console.WriteLine(box[i]);
    if (box[i] is int) {
        sum += (int)box[i];
    }
}

Console.WriteLine(sum);

