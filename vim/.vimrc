set number
set numberwidth=1
set mouse=a
set clipboard=unnamed
set showcmd
set ruler
set encoding=utf-8
set showmatch
set sw=2
set relativenumber
syntax enable
set tabstop=2
set autoindent
set laststatus=2
set guifont=FiraCode:h12
set bg=dark

call plug#begin('~/.vim/plugged')

	" Temas
Plug 'morhetz/gruvbox'

" IDE
Plug 'easymotion/vim-easymotion'
Plug 'scrooloose/nerdtree'
Plug 'christoomey/vim-tmux-navigator'
Plug 'vim-airline/vim-airline'
Plug 'junegunn/limelight.vim' 

call plug#end()

"colorscheme OceanicNext
colorscheme gruvbox
let g:gruvbox_contrast_dark = "hard"
let NERDTreeQuitOnOpen=1
let g:airline_LanguajeClient_table_formatter = "default"

let mapleader=" " 

nmap <Leader>s <Plug>(easymotion-s2)
nmap <Leader>nt :NERDTreeFind<CR>

nmap <Leader>w :w!<CR>
nmap <Leader>q :q<CR>
