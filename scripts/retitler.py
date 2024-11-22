import os

base_path = "../"
blog_path = base_path + "blog/"
projects_path = base_path + "projects/"
wiki_path = base_path + "wiki/"

paths = [base_path, blog_path, projects_path, wiki_path]

def jackoats_titler(html_path):
# HTML as string
    with open(html_path) as f:
        html_content = f.read()

# Parse through string, finds title
    html_lines = html_content.split("\n")
    title_line_n = 0
    for line_n in range(0, len(html_lines)):
        if "<title>" in html_lines[line_n]:
            title_line_n = line_n

    html_lines[title_line_n] = html_lines[title_line_n].replace("baysidets", "jackoats")

    updated_html_content = ""
    for line_n in range(0, len(html_lines)):
        if line_n != (len(html_lines) - 1):
            updated_html_content += (html_lines[line_n] + "\n")
        else:
            updated_html_content += html_lines[line_n]

    with open(html_path, "w") as f:
        f.write(updated_html_content)

def html_extension_checker(dir_name):
    if dir_name[-5:len(dir_name)] == ".html":
        return True

# This is ok for now, but I need to figure out how to get this to apply for all .html files without supplying it specific directories
for path in paths:
    file_list = os.listdir(path)
    for file_name in file_list:
        if html_extension_checker(file_name):
            print(path + file_name)
            jackoats_titler(path + file_name)
