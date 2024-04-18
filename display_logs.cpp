#include <fstream>
#include <iostream>
#include <stack>
#include <queue>
#include <list>
#include <cstring>

#include <sys/types.h>
#include <sys/stat.h>
#ifndef WIN32
#include <unistd.h>
#endif

#ifdef WIN32
#define stat _stat
#endif

int main() {

    time_t prevtime = 0;
    int currline = 0;
    const char* filename = "log.txt";
    bool active = false;
    bool start = true;

    while (1) {
        active = true;

        std::fstream fs;

        fs.open(filename, std::ios_base::in);
        std::string s;

        std::list<char*> rvqueue;

        int ptrln = 0;
        while (fs && active)
        {
            std::getline(fs, s); // read each line into a string 
            if (currline <= ptrln) {
                currline++;
                std::cout << s << '\n';
            }
            
            ptrln++;
        }

        active = false;

    }


	return 0;
}