public class DataGen{
	public static void main(String[] args) {
		int n =24;
		for (int i =0;i<n;i++){
			int y = ((184.3-27.3)*Math.random())+27.3;
			int x = 468.3/n*i; 
			System.out.print(x+","+y+" ");
		}
		System.out.println(" \t");

		n=7;
		for (int i =0;i<n;i++){
			int y = ((184.3-27.3)*Math.random())+27.3;
			int x = 468.3/n*i; 
			System.out.print(x+","+y+" ");
		}
		System.out.println(" \t");



	}
}