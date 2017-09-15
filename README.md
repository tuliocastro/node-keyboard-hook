# Node Keyboard Hook
This Module help you to listen for Keyboard Actions natively. It uses a Java Module (JNativeHook) to intercept the keyboard events. That way you don't need node-gyp to rebuild this module.

### Install

    npm install --save nkb-hook


### Examples

[Examples](examples): All the examples are available at 'examples' folder.

    var hook = require('../nkbhook.js');
    
    var onPressed = function (pressed) {
    
        console.log(pressed);
        console.log('You pressed the key with code ' + pressed.code);
    
    };
    
    hook.start().onPressed(onPressed);
    
### Response

The response is a JSON format with the following fields:

    {
        action: ..., //Action of event - PRESSED, RELEASED, TYPED
        code: ..., //Key Code
        key: ..., //Key Char
        name: ..., //Key Name
        shift: ..., //If Shift is pressed
        alt: ..., //If alt is pressed
        ctrl: ..., //If ctrl is pressed
        meta: ... //If meta is pressed
    }

### Table of Key Codes

<table>
<tbody>
<tr>
<td><b>Esc</b></td>
<td>1</td>
<td>0x1</td>
</tr>
<tr>
<td><b>1</b> or <b>!</b></td>
<td class="x-hidden-focus">2</td>
<td>0x2</td>
</tr>
<tr>
<td><b>2</b> or <b>@</b></td>
<td>3</td>
<td>0x3</td>
</tr>
<tr>
<td><b>3</b> or <b>#</b></td>
<td>4</td>
<td>0x4</td>
</tr>
<tr>
<td><b>4</b> or <b>$</b></td>
<td>5</td>
<td>0x5</td>
</tr>
<tr>
<td><b>5</b> or <b>%</b></td>
<td>6</td>
<td>0x6</td>
</tr>
<tr>
<td><b>6</b> or <b>^</b></td>
<td>7</td>
<td>0x7</td>
</tr>
<tr>
<td><b>7</b> or <b>&amp;</b></td>
<td>8</td>
<td>0x8</td>
</tr>
<tr>
<td><b>8</b> or <b>*</b></td>
<td>9</td>
<td>0x9</td>
</tr>
<tr>
<td><b>9</b> or <b>(</b></td>
<td>10</td>
<td>0xa</td>
</tr>
<tr>
<td><b>0</b> or <b>)</b></td>
<td>11</td>
<td>0xb</td>
</tr>
<tr>
<td><b>-</b> or <b>_</b></td>
<td>12</td>
<td>0xc</td>
</tr>
<tr>
<td><b>=</b> or <b>+</b></td>
<td>13</td>
<td>0xd</td>
</tr>
<tr>
<td><b>Bksp</b></td>
<td>14</td>
<td>0xe</td>
</tr>
<tr>
<td><b>Tab</b></td>
<td>15</td>
<td>0xf</td>
</tr>
<tr>
<td><b>Q</b></td>
<td>16</td>
<td>0x10</td>
</tr>
<tr>
<td><b>W</b></td>
<td>17</td>
<td>0x11</td>
</tr>
<tr>
<td><b>E</b></td>
<td>18</td>
<td>0x12</td>
</tr>
<tr>
<td><b>R</b></td>
<td>19</td>
<td>0x13</td>
</tr>
<tr>
<td><b>T</b></td>
<td>20</td>
<td>0x14</td>
</tr>
<tr>
<td><b>Y</b></td>
<td>21</td>
<td>0x15</td>
</tr>
<tr>
<td><b>U</b></td>
<td>22</td>
<td>0x16</td>
</tr>
<tr>
<td><b>I</b></td>
<td>23</td>
<td>0x17</td>
</tr>
<tr>
<td><b>O</b></td>
<td>24</td>
<td>0x18</td>
</tr>
<tr>
<td><b>P</b></td>
<td>25</td>
<td>0x19</td>
</tr>
<tr>
<td><b>[</b> or <b>{</b></td>
<td>26</td>
<td>0x1a</td>
</tr>
<tr>
<td><b>]</b> or <b>}</b></td>
<td>27</td>
<td>0x1b</td>
</tr>
<tr>
<td><b>Enter</b></td>
<td>28</td>
<td>0x1c</td>
</tr>
<tr>
<td><b>Left Ctrl</b></td>
<td>29</td>
<td>0x1d</td>
</tr>
<tr>
<td><b>A</b></td>
<td>30</td>
<td>0x1e</td>
</tr>
<tr>
<td><b>S</b></td>
<td>31</td>
<td>0x1f</td>
</tr>
<tr>
<td><b>D</b></td>
<td>32</td>
<td>0x20</td>
</tr>
<tr>
<td><b>F</b></td>
<td>33</td>
<td>0x21</td>
</tr>
<tr>
<td><b>G</b></td>
<td>34</td>
<td>0x22</td>
</tr>
<tr>
<td><b>H</b></td>
<td>35</td>
<td>0x23</td>
</tr>
<tr>
<td><b>J</b></td>
<td>36</td>
<td>0x24</td>
</tr>
<tr>
<td><b>K</b></td>
<td>37</td>
<td>0x25</td>
</tr>
<tr>
<td><b>L</b></td>
<td>38</td>
<td>0x26</td>
</tr>
<tr>
<td><b>;</b> or <b>:</b></td>
<td>39</td>
<td>0x27</td>
</tr>
<tr>
<td><b>'</b> or <b>"</b></td>
<td>40</td>
<td>0x28</td>
</tr>
<tr>
<td><b>`</b> or <b>~</b></td>
<td>41</td>
<td>0x29</td>
</tr>
<tr>
<td><b>Left Shift</b></td>
<td>42</td>
<td>0x2a</td>
</tr>
<tr>
<td><b>\</b> or <b>|</b></td>
<td>43</td>
<td>0x2b</td>
</tr>
<tr>
<td><b>Z</b></td>
<td>44</td>
<td>0x2c</td>
</tr>
<tr>
<td><b>X</b></td>
<td>45</td>
<td>0x2d</td>
</tr>
<tr>
<td><b>C</b></td>
<td>46</td>
<td>0x2e</td>
</tr>
<tr>
<td><b>V</b></td>
<td>47</td>
<td>0x2f</td>
</tr>
<tr>
<td><b>B</b></td>
<td>48</td>
<td>0x30</td>
</tr>
<tr>
<td><b>N</b></td>
<td>49</td>
<td>0x31</td>
</tr>
<tr>
<td><b>M</b></td>
<td>50</td>
<td>0x32</td>
</tr>
<tr>
<td><b>,</b> or <b>&lt;</b></td>
<td>51</td>
<td>0x33</td>
</tr>
<tr>
<td><b>.</b> or <b>&gt;</b></td>
<td>52</td>
<td>0x34</td>
</tr>
<tr>
<td><b>/</b> or <b>?</b></td>
<td>53</td>
<td>0x35</td>
</tr>
<tr>
<td><b>Right Shift</b></td>
<td>54</td>
<td>0x36</td>
</tr>
<tr>
<td><b>Prtsc</b><br>
This is a special case</td>
<td>55</td>
<td>0x37</td>
</tr>
<tr>
<td><b>Left Alt</b></td>
<td>56</td>
<td>0x38</td>
</tr>
<tr>
<td><b>Space</b></td>
<td>57</td>
<td>0x39</td>
</tr>
<tr>
<td><b>Caps Lock</b></td>
<td>58</td>
<td>0x3a</td>
</tr>
<tr>
<td><b>F1</b></td>
<td>59</td>
<td>0x3b</td>
</tr>
<tr>
<td><b>F2</b></td>
<td>60</td>
<td>0x3c</td>
</tr>
<tr>
<td><b>F3</b></td>
<td>61</td>
<td>0x3d</td>
</tr>
<tr>
<td><b>F4</b></td>
<td>62</td>
<td>0x3e</td>
</tr>
<tr>
<td><b>F5</b></td>
<td>63</td>
<td>0x3f</td>
</tr>
<tr>
<td><b>F6</b></td>
<td>64</td>
<td>0x40</td>
</tr>
<tr>
<td><b>F7</b></td>
<td>65</td>
<td>0x41</td>
</tr>
<tr>
<td><b>F8</b></td>
<td>66</td>
<td>0x42</td>
</tr>
<tr>
<td><b>F9</b></td>
<td>67</td>
<td>0x43</td>
</tr>
<tr>
<td><b>F10</b></td>
<td>68</td>
<td>0x44</td>
</tr>
<tr>
<td><b>Num Lock</b></td>
<td>69</td>
<td>0x45</td>
</tr>
<tr>
<td><b>Scroll Lock</b></td>
<td>70</td>
<td>0x46</td>
</tr>
<tr>
<td><b>Home</b> (Number Pad)</td>
<td>71</td>
<td>0x47</td>
</tr>
<tr>
<td><b>Up Arrow</b> (Number Pad)</td>
<td>72</td>
<td>0x48</td>
</tr>
<tr>
<td><b>Pgup</b> (Number Pad)</td>
<td>73</td>
<td>0x49</td>
</tr>
<tr>
<td><b>Grey -</b> (Number Pad)</td>
<td>74</td>
<td>0x4a</td>
</tr>
<tr>
<td><b>Left Arrow</b> (Number Pad)</td>
<td>75</td>
<td>0x4b</td>
</tr>
<tr>
<td><b>Center</b> (The 5 key on the number pad?)</td>
<td>76</td>
<td>0x4c</td>
</tr>
<tr>
<td><b>Right Arrow</b> (Number Pad)</td>
<td>77</td>
<td>0x4d</td>
</tr>
<tr>
<td><b>Grey +</b> (Number Pad)</td>
<td>78</td>
<td>0x4e</td>
</tr>
<tr>
<td><b>End</b> (Number Pad)</td>
<td>79</td>
<td>0x4f</td>
</tr>
<tr>
<td><b>Down Arrow</b> (Number Pad)</td>
<td>80</td>
<td>0x50</td>
</tr>
<tr>
<td><b>Pgdn</b> (Number Pad)</td>
<td>81</td>
<td>0x51</td>
</tr>
<tr>
<td><b>Ins</b> (Number Pad)</td>
<td>82</td>
<td>0x52</td>
</tr>
<tr>
<td><b>Del</b> (Number Pad)</td>
<td>83</td>
<td>0x53</td>
</tr>
<tr>
<td><b>Enter</b> (Number Pad)</td>
<td>57372</td>
<td>0xe01c</td>
</tr>
<tr>
<td><b>Right Ctrl</b></td>
<td>57373</td>
<td>0xe01d</td>
</tr>
<tr>
<td><b>Grey /</b> (Number Pad)</td>
<td>57397</td>
<td>0xe035</td>
</tr>
<tr>
<td><b>Right Alt</b></td>
<td>57400</td>
<td>0xe038</td>
</tr>
<tr>
<td><b>Home</b></td>
<td>57415</td>
<td>0xe047</td>
</tr>
<tr>
<td><b>Up Arrow </b></td>
<td>57416</td>
<td>0xe048</td>
</tr>
<tr>
<td><b>Pgup</b></td>
<td>57417</td>
<td>0xe049</td>
</tr>
<tr>
<td><b>Left Arrow</b></td>
<td>57419</td>
<td>0xe04b</td>
</tr>
<tr>
<td><b>Right Arrow</b></td>
<td>57421</td>
<td>0xe04d</td>
</tr>
<tr>
<td><b>End</b></td>
<td>57423</td>
<td>0xe04f</td>
</tr>
<tr>
<td><b>Down Arrow</b></td>
<td>57424</td>
<td>0xe050</td>
</tr>
<tr>
<td><b>Pgdn</b></td>
<td>57425</td>
<td>0xe051</td>
</tr>
<tr>
<td><b>Ins</b></td>
<td>57426</td>
<td>0xe052</td>
</tr>
<tr>
<td><b>Del</b></td>
<td>57427</td>
<td>0xe053</td>
</tr>
<tr>
<td><b>F11</b></td>
<td>57431</td>
<td>0xe057</td>
</tr>
<tr>
<td><b>F12</b></td>
<td>57432</td>
<td>0xe058</td>
</tr>
<tr>
<td><b>Left Winkey</b></td>
<td>57435</td>
<td>0xe05b</td>
</tr>
<tr>
<td><b>Right Winkey</b></td>
<td>57436</td>
<td>0xe05c</td>
</tr>
</tbody>
</table>