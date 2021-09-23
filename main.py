import random 


def estimate_phi_iteration(n):
    """
    Estimate φ(n) via iteration
    """
    total = 0
    k = 1
    while k <= n:
        total += 1 / k
        k += 1
    return total


def estimate_phi(n):
    """
    Estimate φ(n) via iteration
    """
    point_circle = 0
    point_total = 0
    for _ in range(n):
        x = random.uniform(0,1)
        y = random.uniform(0,1)
        if x ** 2 + y ** 2 <= 1:
            point_circle += 1
        point_total += 1
    return 4 * point_circle / point_total


print(estimate_phi(1000000)) # 3.14066
print(estimate_phi_iteration(1000000)) # 14.392726722864989