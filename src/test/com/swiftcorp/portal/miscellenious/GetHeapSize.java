package com.swiftcorp.portal.miscellenious;

public class GetHeapSize {
    public static void main(String[]args){

        //Get the jvm heap size.
        long heapSize = Runtime.getRuntime().totalMemory();

        //Print the jvm heap size.
        System.out.println("Heap Size = " + heapSize);
    }
}
