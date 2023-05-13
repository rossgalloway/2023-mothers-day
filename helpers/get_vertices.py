
import re
import json


def extract_vertices_from_file(input_file, output_file):
    # open the file and read the contents
    with open(input_file, "r") as f:
        content = f.read()

    # create a list to hold the vertices
    vertices = []

    # find all the vertex and bezierVertex calls
    matches = re.findall(
        r"(vertex|bezierVertex)\(([-?\d+\.?\d*,\s?-?\d+\.?\d*]+)\)", content)

    # loop through the matches
    for match in matches:
        # split the matched string on commas, convert the strings to floats, and add them to the list of vertices
        vertices.append([float(coord) for coord in match[1].split(",")])

    # write the vertices to a json file
    with open(output_file, "w") as f:
        json.dump(vertices, f)
    
    return vertices


def extract_clean_vertices_from_file(vertices, output_file):
    cleanArray = []
    for arr in vertices:
        if len(arr) == 2:
            cleanArray.append(arr)
        elif len(arr) > 2:
            intArray = arr[-2:]
            print(intArray)
            cleanArray.append(intArray)

    # output new array as JSON
    with open(output_file, "w") as f:
        json.dump(cleanArray, f)

# call the function with the appropriate arguments
bezVertices = extract_vertices_from_file(
    "/home/ross/code/p5.js/specArch/assets/cursiveSpecific.js",
    "/home/ross/code/p5.js/specArch/assets/cursiveSpecificVertices.js")

extract_clean_vertices_from_file(
    bezVertices, "/home/ross/code/p5.js/specArch/assets/cleanSpecificVertices.js")
