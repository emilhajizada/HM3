int[] say = { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
int[] ededler= { 1, 2, 3, 2, 5, 9, 7, 5, 1, 1, 5, 9 };
for (int j = 0; j < say.Length; j++)
{
    int count = 0;
    for (int i = 0; i < ededler.Length; i++)
    {
        if (ededler[i]==say[j]) 
        {
            count++;
        }
        
    }
    if (count!=0)
    {
        
 Console.WriteLine(say[j] + "-" + count);
    }
}
    
